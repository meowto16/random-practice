import { faker } from '@faker-js/faker';

export const PostFixture = () => ({
  id: faker.datatype.number(),
  userId: faker.datatype.number(),
  title: faker.random.words(faker.datatype.number({ min: 0, max: 10 })),
  body: faker.random.words(faker.datatype.number({ min: 5, max: 20 })),
})
