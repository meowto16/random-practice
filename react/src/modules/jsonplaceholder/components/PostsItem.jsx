import { Group, Header, Caption } from '@vkontakte/vkui'
import React from 'react'

export const PostsItem = ({ title, desc }) => {
  return (
    <Group header={<Header>{title}</Header>} description={<Caption>{desc}</Caption>} />
  )
}
