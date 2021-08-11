import {getBooks, getBookById, saveBook, removeBook} from "./modal"

export const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, {id}) => {
      return getBookById(id)
    },
  },
  Mutation: {
    addBook: (_, {book}) => {
      return saveBook(book)
    },
    removeBook: (_, {id}) => {
      return removeBook(id)
    },
  },
}
