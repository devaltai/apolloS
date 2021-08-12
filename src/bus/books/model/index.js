//Core
const {v1: generatId} = require("uuid")

import {booksDB} from "./db"

export const getBooks = () => {
  const books = []
  booksDB.forEach((value, key) => {
    const curentBook = {
      id: key,
      ...value,
    }
    books.push(curentBook)
  })
  return books
}

export const getBookById = (id) => {
  const book = booksDB.get(id)
  if (!book) {
    throw new Error(`We don't have a book with id: ${id}`)
  }
  return {id, ...book}
}

export const saveBook = (book) => {
  const id = generatId()
  booksDB.set(id, book)
  const savedBook = booksDB.get(id)
  return {id, ...savedBook}
}

export const removeBook = (id) => {
  const expectedBook = booksDB.get(id)
  booksDB.delete(id)
  return {id, ...expectedBook}
}

export const updateBook = (id, receivedBook) => {
  const previousBook = booksDB.get(id)
  const expectedBook = {
    ...previousBook,
    ...receivedBook,
  }
  removeBook(id)
  booksDB.set(id, expectedBook)
  const savedBook = booksDB.get(id)
  return {id, ...savedBook}
}
