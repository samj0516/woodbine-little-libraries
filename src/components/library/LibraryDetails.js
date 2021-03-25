import React, { useContext, useEffect, useState } from "react"
import { LibraryContext } from './LibraryProvider'
import { BookContext } from '../book/BookProvider'
import { useParams, useHistory } from "react-router-dom"
import { BookCard } from '../book/BookCard'

export const LibraryDetail = () => {
  const { getBooks, books } = useContext(BookContext)
  const { libraryId } = useParams()
  const history = useHistory()  

  useEffect(() => {
      getBooks()
  }, [])

 

  let libraryBooks = books.filter(book => parseInt(libraryId) === book.libraryId)

  return(<>
    
    <section className="bookList">
      <div className="buttonContainer is-flex is-justify-content-center">
    <button className="button is-medium has-text-centered" onClick={() => {history.push(`/add/${libraryId}`)}}>+ Add Book</button>
    </div>
        {
            libraryBooks.map(book => !book.deleted ?
                 <BookCard key={book.id} book={book} /> : <div key={book.id}></div>)
        }
    </section>
  
  </>)
}