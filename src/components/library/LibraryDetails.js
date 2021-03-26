import React, { useContext, useEffect, useState } from "react"
import { LibraryContext } from './LibraryProvider'
import { BookContext } from '../book/BookProvider'
import { useParams, useHistory } from "react-router-dom"
import { BookCard } from '../book/BookCard'

export const LibraryDetail = () => {
  const { getBooks, books } = useContext(BookContext)
  const { getLibraryById, lib, setLib } = useContext(LibraryContext)
  const { libraryId } = useParams()
  const history = useHistory() 
   

  useEffect(() => {
      getLibraryById(libraryId)
      .then((data) => setLib(data))
      .then(getBooks)
  }, [])

 

  let libraryBooks = books.filter(book => parseInt(libraryId) === book.libraryId)

  return(<>
    
    <section className="bookList">
      <div className="container level is-flex is-justify-content-flex-start">
        <h1 className="subtitle is-1">{lib.name}</h1>
        <button className="button is-medium has-text-centered" onClick={() => {history.push(`/add/${libraryId}`)}}>+ Add Book</button>
      </div>
      <div className="buttonContainer is-flex is-justify-content-center">
    
    </div>
        {
            libraryBooks.map(book => !book.deleted ?
                 <BookCard key={book.id} book={book} /> : <div key={book.id}></div>)
        }
    </section>
  
  </>)
}