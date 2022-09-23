import { render, waitFor } from '@testing-library/react'
import nock from 'nock'

import { PostsMock } from '../../services/__mocks__/posts'

import { PostsList } from '../PostsList';

describe('Components -> PostsList', () => {
  beforeAll(() => nock.disableNetConnect())

  const renderComponent = () => render(<PostsList />)

  it('When component mounts, expect no throws or errors', () => {
    PostsMock.get.one()
    renderComponent()
  });

  it('When component fetches posts, expect "loading" text to be in the document', async () => {
    PostsMock.get.one()
    const screen = renderComponent()
    const posts = screen.queryAllByRole('article')

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    expect(posts).toHaveLength(0)
  })

  it('When component has fetched posts, expect every post to be in the document', async () => {
    PostsMock.get.many()
    const screen = renderComponent()

    await waitFor(() => {
      const posts = screen.queryAllByRole('article')
      posts.forEach((post) => expect(post).toBeInTheDocument())
    })
  })

  it('When component has fetched posts, and the response is empty, should show "no posts"', async () => {
    PostsMock.get.empty()
    const screen = renderComponent()
    await waitFor(() => {
      expect(screen.getByText(/no posts/i)).toBeInTheDocument()
    })
  })

  it('When component throws error while fetching, should show "error"', async () => {
    PostsMock.get.error()
    const screen = renderComponent()
    await waitFor(() => {
      expect(screen.getByText(/fetch error/i)).toBeInTheDocument()
    })
  })

  afterAll(() => nock.enableNetConnect())
})
