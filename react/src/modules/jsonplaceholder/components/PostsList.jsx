import React, { useEffect, useState } from 'react'

import { Div } from '@vkontakte/vkui'
import { Posts } from '../services/posts'
import { PostsItem } from './PostsItem'

export const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    Posts.get()
      .then((response) => setPosts(response.data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return 'Loading'
  if (isError) return 'Fetch error'

  if (!posts?.length) return 'No posts'

  return (
    <Div>
      {posts.map((post) => <PostsItem key={post.id} title={post.title} desc={post.body} /> )}
    </Div>
  )
}