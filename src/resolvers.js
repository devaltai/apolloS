import {getBooks, getBookById} from "./modal"

export const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, {id}) => {
      console.log(getBookById(id))
      return getBookById(id)
    },
  },
}
