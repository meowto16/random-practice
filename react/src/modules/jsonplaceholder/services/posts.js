import { Request } from './Request'

export const Posts = {
  get: async (params = {}) => Request.get('/posts', { params }),
  getById: async (id, params = {}) => Request.get(`/posts/${id}`, { params }),
}