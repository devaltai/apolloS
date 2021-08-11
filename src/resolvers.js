import {getBooks} from "./modal"

export const resolvers = {
  Query: {
    books: () => getBooks(),
  },
}
