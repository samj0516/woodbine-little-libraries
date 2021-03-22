import React, { useContext, useEffect, useState } from "react"
import { LibraryContext } from './LibraryProvider'
import { BookContext } from '../book/BookProvider'
import { useParams, useHistory } from "react-router-dom"

export const LibraryDetail = () => {
  const { getBooks, books } = useContext(BookContext)
  const { libraryId } = useParams()
  const history = useHistory()  
  
  useEffect(() => {
      getBooks()
  }, [])

  let libraryBooks = books.filter(book => libraryId === book.libraryId)
}