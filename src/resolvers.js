import {getBooks, getBookById, saveBook} from "./modal"

export const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, {id}) => {
      return getBookById(id)
    },
  },
  Mutation: {
    addBook: (_, {id, title, author}) => {
      return saveBook(id, title, author)
    },
  },
}
