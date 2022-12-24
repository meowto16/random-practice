const fs = require('fs')
const csv = require('csv')
const path = require('path')

const { dictionary } = require('./blocks')

const FILES_DIR = path.resolve(__dirname, 'files')
const FILE_NAME = `sasuke-glass-64x`
const LINES = 64

const filePath = path.resolve(FILES_DIR, `${FILE_NAME}.csv`)
const line = {
  from: 2,
  to: LINES + 1,
}

const rows = []

fs.createReadStream(filePath)
  .pipe(csv.parse({ delimiter: ",", from_line: line.from, to_line: line.to }))
  .on('data', function ([_, ...row]) {
    rows.push(row);
  })
  .on('end', readRows.bind(null, rows))

function readRows(rows) {
  const repeats = findRepeats(rows)
  const total = findBlocksTotal(rows)

  const hotkeys = total
    .slice(0,9)
    .reduce((acc, [_, block], idx) => {

      acc[block.getId()] = idx + 1
      return acc
    }, {})

  let log = [
    logTitle(),
    logImage(),
    logTotal(total),
    logRepeats(repeats, hotkeys)
  ].join('\n')

  writeLog(log)
}

function findRepeats(rows) {
  return rows.map((row) => {
    let lastBlockId = null
    let lastCount = 0

    const repeats = []

    for (let i = 0; i < row.length; i++) {
      const isLastIdx = i === row.length - 1
      const currentBlockId = row[i]

      if (lastBlockId === currentBlockId || lastBlockId === null) {
        lastBlockId = currentBlockId
        lastCount++
      } else {
        repeats.push([lastCount, dictionary.byId[lastBlockId]])

        lastBlockId = currentBlockId
        lastCount = 1
      }

      if (isLastIdx) {
        repeats.push([lastCount, dictionary.byId[lastBlockId]])
      }
    }

    return repeats
  })
}

function findBlocksTotal(rows) {
  const usages = rows.reduce((acc, row) => {
    row.forEach((blockId) => {
      if (!acc[blockId]) {
        acc[blockId] = 0;
      }

      acc[blockId]++;
    })

    return acc
  }, {})

  return Object.entries(usages).map(([blockId, usagesCount]) => {
    return [usagesCount, dictionary.byId[blockId]]
  }).sort((a, b) => b[0] - a[0])
}

function logTitle() {
  return `# ${FILE_NAME}\n\n`
}

function logImage() {
  return `![${FILE_NAME} image](${FILE_NAME}.png)\n`
}

function logTotal(total) {
  let text = `## Всего для арта необходимо: \n`

  total.forEach(([usages, block]) => {
    const blockName = block.getLocale('ru')
    const stacks = (usages / 64).toFixed('2')

    text += `- ${blockName}: ${usages}. В стаках: ${stacks}\n`
  })

  return text
}

function logRepeats(repeats, hotkeys = {}) {
  let text = '## Картина целиком: \n\n'

  repeats.reverse().forEach((row, idx) => {
    const rowOrder = idx + 1
    text += `### Строка ${rowOrder}\n`

    row.forEach(([count, block]) => {
      const blockName = block.getLocale('ru')
      const hotkey = hotkeys[block.getId()]

      const title = hotkey
        ? `(${hotkey}) ${blockName}`
        : blockName;

      text += `- ${title}: ${count}\n`
    })

    text += '\n'
  })

  return text
}

function writeLog(content) {
  fs.writeFileSync(
    path.resolve(FILES_DIR, `${FILE_NAME}.md`),
    content,
    {
      encoding: 'utf8',
      flag: 'w'
    })
}