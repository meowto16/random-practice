import { faker } from '@faker-js/faker'

import { PostFixture } from '../__fixtures__/post.fixture'
import { NockRequest } from './Request'

export const PostsMock = {
  get: {
    _url: '/posts',
    empty: function() {
      NockRequest.get(this._url).reply(200, []);
    },
    one: function() {
      NockRequest.get(this._url).reply(200, [PostFixture()])
    },
    many: function() {
      NockRequest.get(this._url).reply(
        200,
        Array.from(
          { length: faker.datatype.number({ min: 0, max: 10 }) },
          () => PostFixture()
        )
      )
    },
    error: function() {
      NockRequest.get(this._url).reply(500)
    }
  }
}