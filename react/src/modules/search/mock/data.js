import rows from './rows.json'

const ROWS_COUNT = 100_000

export const options = rows.data.slice(0, ROWS_COUNT)
  .map((row) => ({
    value: row[1],
    label: `${row[14]} ${row[15]} (${row[13]}) ${row[16].match(/\(\w+\)/g)?.[0]}`,
  }))
  .sort((a, b) => a.label.localeCompare(b.label))
