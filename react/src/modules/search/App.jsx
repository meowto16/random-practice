import { useCallback, useState } from 'react'
import { Panel, PanelHeader, Select } from '@vkontakte/vkui'

import { options as optionsMock } from './mock/data'

const MAX_ITEMS = 50
const DEFAULT_OPTIONS = optionsMock.slice(0, MAX_ITEMS)

export const App = ({ id }) => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS)

  const handleSearch = useCallback((e) => {
    const value = e.target.value

    if (value.trim() === '') {
      setOptions(DEFAULT_OPTIONS)
      return true
    }

    const input = value.toLowerCase()
    const result = []

    for (let i = 0; i < optionsMock.length && result.length < MAX_ITEMS; i++) {
      const item = optionsMock[i]

      if ((item?.label || '').toLowerCase().startsWith(input)) {
        result.push(item)
      }
    }

    setOptions(result)
  }, [])

  console.log(options)

  return (
    <Panel id={id}>
      <PanelHeader>Поиск на фронте</PanelHeader>
      <Select
        options={options}
        placeholder="Начните печатать"
        searchable
        filterFn={() => true}
        onInput={handleSearch}
        onFocus={() => setOptions(DEFAULT_OPTIONS)}
      />
    </Panel>
  )
}
