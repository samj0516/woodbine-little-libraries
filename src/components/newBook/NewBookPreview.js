import React, { useState, createContext, useContext } from "react"
import { NewBookContext } from './NewBookProvider'
import { BookContext } from '../book/BookProvider'
import { useParams } from "react-router-dom"
export const NewBookPreview = () => {
    const { newBook, isbn } = useContext(NewBookContext)
    const { updateBook, getBooks, addBook } = useContext(BookContext)
    const { libraryId } = useParams()
    console.log(newBook)
    let bookCoverLg = newBook.cover.large
    let bookCoverMed = newBook.cover.medium
    
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

