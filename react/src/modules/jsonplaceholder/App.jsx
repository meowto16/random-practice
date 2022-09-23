import { Panel, PanelHeader } from '@vkontakte/vkui'
import React from 'react'

import { PostsList } from './components/PostsList'

export const App = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>JSON-placeholder</PanelHeader>
      <PostsList />
    </Panel>
  )
}
