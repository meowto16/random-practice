export const binaryFilterBySubstring = (arr, input, maxElements = null, getCompare = (el) => el, ) => {
  if (input === '') return arr;
  if (!arr.length) return arr

  let startIdx = 0, endIdx = arr.length - 1;
  input = input.toLowerCase()

  while (startIdx <= endIdx) {
    const middleIdx = Math.floor ((endIdx + startIdx) / 2)
    const item = getCompare(arr[middleIdx]).slice(0, input.length).toLowerCase()
    const comparison = input.localeCompare(item)

    if (comparison === 0) {
      let leftStartIdx = startIdx, leftEndIdx = middleIdx, rightStartIdx = middleIdx, rightEndIdx = endIdx;
      let mostLeftIdx = middleIdx
      let mostRightIdx = middleIdx

      while (leftStartIdx <= leftEndIdx) {
        const middleIdx = Math.floor((leftEndIdx + leftStartIdx) / 2)
        const item = getCompare(arr[middleIdx]).slice(0, input.length).toLowerCase()
        const comparison = input.localeCompare(item)

        if (comparison === 0) {
          mostLeftIdx = middleIdx
          leftEndIdx = middleIdx - 1
          continue
        }

        if (comparison === 1) {
          leftStartIdx = middleIdx + 1
        }
      }

      while (rightStartIdx <= rightEndIdx) {
        const middleIdx = Math.floor ((rightEndIdx + rightStartIdx) / 2)
        const item = getCompare(arr[middleIdx]).slice(0, input.length).toLowerCase()
        const comparison = input.localeCompare(item)

        if (comparison === 0) {
          mostRightIdx = middleIdx
          rightStartIdx = middleIdx + 1
        }

        if (comparison === -1) {
          rightEndIdx = middleIdx - 1
        }
      }

      const end = Math.min(mostLeftIdx + (maxElements || 0), mostRightIdx + 1)

      return arr.slice(mostLeftIdx, maxElements !== null ? end : mostRightIdx + 1);
    }

    if (comparison === 1) {
      startIdx = middleIdx + 1
      continue
    }

    if (comparison === -1) {
      endIdx = middleIdx - 1
    }
  }

  return []
}