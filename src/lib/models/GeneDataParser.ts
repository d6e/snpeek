import Papa from "papaparse";
import { GeneVariant } from "./GeneVariant";
import type { MpsData } from "./MpsData";
import { Genotype } from "./Genotype";

export type GeneDataRowParser = (data: string[][], mpsData: MpsData) => GeneVariant[];

export class GeneDataParser {
  file: File;
  parseRow: GeneDataRowParser;
  delimiter: string;
  mpsData: MpsData;

  constructor(file: File, parseRow: GeneDataRowParser, delimiter: string, mpsData: MpsData) {
    this.file = file;
    this.parseRow = parseRow;
    this.delimiter = delimiter;
    this.mpsData = mpsData
  }

  static async fromFile(file: File, mpsData: MpsData): Promise<GeneDataParser> {
    const maxSize = 1024 * 1024 * 100 // 100 Mb
    const fileExtension = file.name.split('.').at(-1);

    return new Promise((resolve, reject) => {
      if (file.size > maxSize) {
        console.debug('Streaming large file=' + file.name)
        if (fileExtension !== 'vcf') {
          throw Error("Large file is not a vcf file")
        }
        resolve(new GeneDataParser(file, GeneDataParser.parseVCFData, '\t', mpsData));
      } else {
        Papa.parse(file, {
          preview: 1,
          complete: (results) => {
            const firstLine: string = results.data.join('')
            const twentyThreeAndMeHeader = 'generated by 23andMe'
            const ancestryHeader = '#AncestryDNA raw data download'
            if (firstLine.includes(twentyThreeAndMeHeader)) {
              console.debug('detected 23andme data')
              resolve(new GeneDataParser(file, GeneDataParser.parse23AndMeData, '\t', mpsData));
            } else if (firstLine.includes(ancestryHeader)) {
              console.debug('detected ancestry data')
              resolve(new GeneDataParser(file, GeneDataParser.parseAncestryData, ',', mpsData));
            } else {
              reject(Error('Unable to determine the filetype from the header.'));
            }
          }
        })
      }

    })
  }

  async parse(onUpdateProgress: (progress: number) => void): Promise<GeneVariant[]> {
    const chunkSize = 1024 * 50 // 50KB
    let matchingRsids: GeneVariant[] = [] // aggregate all SNPs

    // for updating the progress bar
    const fileSize = this.file.size
    let processedSize = 0

    return new Promise((resolve, reject) => {
      Papa.parse(this.file, {
        chunkSize,
        dynamicTyping: true,
        delimiter: this.delimiter,
        chunk: (results, parser) => {
          const data = results.data as string[][]
          processedSize += chunkSize

          const progress = processedSize / fileSize * 100
          onUpdateProgress(progress);
          // progressBarUpdate(elements, `${progress}%`)

          try {
            const foundSnps = this.parseRow(data, this.mpsData)
            matchingRsids = matchingRsids.concat(foundSnps)
          } catch (error) {
            console.error('Error while parsing chunk:', error)
            alert('An error occurred while parsing the file.')
            parser.abort()
          }
        },
        complete(results, file) {
          resolve(matchingRsids);
        },
        error(error, file) {
          reject(error);
        },
      })
    });

    // Papa.parse(file, {
    //   chunkSize,
    //   dynamicTyping: true,
    //   delimiter,
    //   chunk: (results, parser) => {
    //     const data = results.data as string[][]
    //     processedSize += chunkSize

    //     const progress = processedSize / fileSize * 100
    //     // progressBarUpdate(elements, `${progress}%`)

    //     try {
    //       const foundSnps = parseRowFunction(data, mpsData)
    //       matchingRsids = matchingRsids.concat(foundSnps)
    //     } catch (error) {
    //       console.error('Error while parsing chunk:', error)
    //       alert('An error occurred while parsing the file.')
    //       parser.abort()
    //     }
    //   },
    //   complete: () => {
    //     progressBarUpdate(elements, '100%')
    //     renderTable(elements, matchingRsids, mpsData)
    //     renderReportDownload(elements, matchingRsids)
    //     progressBarHide(elements)
    //   },
    //   error: (error) => {
    //     console.error('Error while reading file:', error)
    //     alert('An error occurred while reading the file.')
    //     // progressBarHide(elements)
    //   }
    // })
  }

  static parse23AndMeData(data: string[][], mpsData: MpsData): GeneVariant[] {
    const foundSnps: GeneVariant[] = []
    data.forEach(row => {
      // console.log(`row=${row[0]}`)
      if (row.length < 4 || (typeof row[0] === 'string' && row[0].startsWith('#'))) {
        return // skip these rows
      }
      const snp = row[0]
      if (snp in mpsData) {
        foundSnps.push(new GeneVariant({
          rsid: snp,
          chromosome: row[1],
          position: row[2],
          genotype: Genotype.fromString(row[3]),
          phenotype: mpsData[snp].phenotype,
          pathogenic: mpsData[snp].pathogenic.map(Genotype.fromString).filter(item => item !== null),
          gene: mpsData[snp].gene
        }))
      }
    })
    return foundSnps
  }

  static parseAncestryData(data: string[][], mpsData: MpsData): GeneVariant[] {
    const foundSnps: GeneVariant[] = []
    data.forEach(row => {
      row = row[0]?.split('\t') ?? [] // HACK: This is a workaround for Papa misreading AncestryDNA files.
      if (row.length < 4) {
        return // skip these rows
      }
      const snp = row[0]
      if (snp in mpsData) {
        foundSnps.push(new GeneVariant({
          rsid: snp,
          chromosome: row[1],
          position: row[2],
          genotype: Genotype.fromString(row[3] + row[4]),
          phenotype: mpsData[snp].phenotype,
          pathogenic: mpsData[snp].pathogenic.map(Genotype.fromString).filter(item => item !== null),
          gene: mpsData[snp].gene
        }))
      }
    })
    return foundSnps
  }

  static parseVCFData(data: string[][], mpsData: MpsData): GeneVariant[] {
    const foundSnps: GeneVariant[] = []
    data.forEach(row => {
      if (row.length < 5 || (typeof row[0] === 'string' && row[0].startsWith('#'))) {
        return // skip these rows
      }
      const snp = row[2]
      if (snp in mpsData) {
        foundSnps.push(new GeneVariant({
          rsid: snp,
          chromosome: row[0],
          position: row[1],
          genotype: Genotype.fromString(row[4]), // assuming genotype is in the 5th column
          phenotype: mpsData[snp].phenotype,
          pathogenic: mpsData[snp].pathogenic.map(Genotype.fromString).filter(item => item !== null),
          gene: mpsData[snp].gene
        }))
      }
    })
    return foundSnps
  }
}
