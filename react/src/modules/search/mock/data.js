import rows from './rows.json'

const ROWS_COUNT = 100_000

const options = rows.data.slice(0, ROWS_COUNT).map((row) => ({
  value: row[1],
  label: `${row[14]} ${row[15]} (${row[13]}) ${row[16].match(/\(\w+\)/g)?.[0]}`,
}))

const searchTree = {}

options.forEach((option, idx) => {
  const label = option.label.toLowerCase()
  let tree = searchTree

  for (let i = 0; i < label.length; i++) {
    const char = label[i]
    tree[char] = tree[char] || {}

    if (!tree[char]._keys) tree[char]._keys = []
    tree[char]._keys.push(idx)

    tree = tree[char]
  }
})

export {
  options,
  searchTree,
}