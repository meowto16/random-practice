import { useCallback, useState } from 'react'
import { Panel, PanelHeader, Select } from '@vkontakte/vkui'

import { options as optionsMock } from './mock/data'
import { binaryFilterBySubstring } from './util/binaryFilterBySubstring'

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
    const filtered = binaryFilterBySubstring(optionsMock, value, 50, (option) => option.label)
    setOptions(filtered)
  }, [])

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
