import React, { memo } from 'react'

type ListItem = {
  id: number;
  value: number;
}

interface ListProps {
  items: ListItem[]
}

export const List = memo(({ items }: ListProps) => {
  return (
    <div>
      {items.map(item => <p key={item.id}>{item.value}</p>)}
    </div>
  )
})