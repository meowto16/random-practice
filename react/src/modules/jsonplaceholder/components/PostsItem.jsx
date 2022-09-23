import { Group, Header, Caption } from '@vkontakte/vkui'
import React from 'react'

export const PostsItem = ({ title, desc }) => {
  return (
    <Group
      role="article"
      header={<Header>{title}</Header>}
      description={<Caption>{desc}</Caption>}
    />
  )
}
