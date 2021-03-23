import React, { useState, createContext, useContext } from "react"
import { NewBookContext } from './NewBookProvider'
import { BookContext } from '../book/BookProvider'
import { useParams, useHistory } from "react-router-dom"
export const NewBookPreview = () => {
    const { newBook, isbn } = useContext(NewBookContext)
    const { updateBook, getBooks, addBook } = useContext(BookContext)
    const { libraryId } = useParams()
    const history = useHistory()
    console.log(newBook)
    const bookCoverLg = newBook.cover ? newBook.cover.large : "./../book-cover-not-found.jpg"
    console.log(bookCoverLg)
    let bookCoverMed = newBook.cover ? newBook.cover.medium : "./../book-cover-not-found.jpg"
    
    const handleAddNewBook = () => {
        let currentUser = parseInt(sessionStorage.getItem("app_user_id"))
        addBook({
            userId: currentUser,
            libraryId: parseInt(libraryId),
            deleted: false,
            title: newBook.title,
            author: newBook.authors[0].name,
            coverMed: bookCoverMed,
            coverLarge: bookCoverLg,
            isbn: isbn,
            url: newBook.url,
            pages: newBook.number_of_pages

        })
        .then(() => {
            history.push(`/detail/${libraryId}`)
        })
    }
    
    return( 
        <>
        <div className="newBookPreview">
            <div className="newBookPreviewCard">
                <h1>{newBook.title}</h1>
                <h3>By: {newBook.authors[0].name}</h3>
                <a href={newBook.url} target="_blank">
                  <img src={bookCoverLg} alt="Cover of book" />
                </a>
                <p>{newBook.number_of_pages} pages</p>
                <p>Click book cover for more information</p>
                
            </div>
            <button onClick={event => {
                event.preventDefault()
                handleAddNewBook()
            }}>Add to Library</button>
        </div>
        </>
    )
}

