import React, { useState, createContext, useContext } from "react"
import { NewBookContext } from './NewBookProvider'
import { BookContext } from '../book/BookProvider'
import { useParams } from "react-router-dom"
export const NewBookPreview = () => {
    const { newBook, isbn } = useContext(NewBookContext)
    const { updateBook, getBooks, addBook } = useContext(BookContext)
    const { libraryId } = useParams()
    console.log(newBook)
    let bookCover = newBook.cover.large
    
    const handleAddNewBook = () => {
        let currentUser = parseInt(sessionStorage.getItem("app_user_id"))
        addBook({
            userId: currentUser,
            libraryId: libraryId,
            deleted: false,
            title: newBook.title,
            author: newBook.authors[0].name,
            cover: newBook.cover,
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
                    <img src={bookCover} alt="Cover of book" />
                </a>
                <p>Click book cover for more information</p>
                <p>{newBook.number_of_pages} pages</p>
            </div>
            <button onClick={event => {
                event.preventDefault()
                handleAddNewBook()
            }}>Add to Library</button>
        </div>
        </>
    )
}

