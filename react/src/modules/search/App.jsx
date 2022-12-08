import { useCallback, useState } from 'react'
import { Panel, PanelHeader, Select } from '@vkontakte/vkui'

import { options as optionsMock, searchTree } from './mock/data'

const DEFAULT_OPTIONS = optionsMock.slice(0, 50)

export const App = ({ id }) => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS)

  const handleSearch = useCallback((e) => {
    const value = e.target.value

    if (value.trim() === '') {
      setOptions(DEFAULT_OPTIONS)
      return true
    }

    const tree = value.toLowerCase().split('').reduce((acc, char) => acc[char] || {}, searchTree)
    const keys = (tree?._keys || []).slice(0, 50)

    setOptions(keys.map(idx => optionsMock[idx]))
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
      />
    </Panel>
  )
}
