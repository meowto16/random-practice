import { Div } from '@vkontakte/vkui'
import React, { useEffect, useState } from 'react'
import { Posts } from '../services/posts'
import { PostsItem } from './PostsItem'

export const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    Posts.get()
      .then((response) => setPosts(response.data))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return 'Loading'

  return (
    <Div>
      {(posts || []).map((post) => <PostsItem key={post.id} title={post.title} desc={post.body} /> )}
    </Div>
  )
}