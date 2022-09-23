import { Request } from './Request'

export const Todos = {
  get: async (params = {}) => Request.get('/todos', { params }),
  getById: async (id, params = {}) => Request.get(`/todos/${id}`, { params }),
}