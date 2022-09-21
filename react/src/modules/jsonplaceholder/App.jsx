import { Panel, PanelHeader } from '@vkontakte/vkui'
import React from 'react'

export const App = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>JSON-placeholder</PanelHeader>
    </Panel>
  )
}
