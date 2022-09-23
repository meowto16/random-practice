import { render, waitFor } from '@testing-library/react'

import { PostsList } from '../PostsList';

describe('PostsList', () => {
  const renderComponent = () => render(<PostsList />)

  it('renders without crashing', () => {
    renderComponent()
  });

  it('it shows "loading", while fetching posts', async () => {
    const screen = renderComponent()
    const posts = screen.queryAllByRole('article')

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    expect(posts).toHaveLength(0)
  })

  it('it shows posts after loading', async () => {
    const screen = renderComponent()

    await waitFor(() => {
      const posts = screen.queryAllByRole('article')
      posts.forEach((post) => expect(post).toBeInTheDocument())
    })
  })

  it.skip('it shows "no posts", if there is no posts after loading', async () => {
    const screen = renderComponent()
    await waitFor(() => {
      expect(screen.getAllByRole(/no posts/i)).toBeInTheDocument()
    })
  })
})
