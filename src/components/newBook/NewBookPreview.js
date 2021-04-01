import React, { useState, createContext, useContext, useEffect } from "react"
import { NewBookContext } from './NewBookProvider'
import { BookContext } from '../book/BookProvider'
import { LibraryContext } from '../library/LibraryProvider'
import { useParams, useHistory } from "react-router-dom"
export const NewBookPreview = () => {
    const { newBook, isbn } = useContext(NewBookContext)
    const { updateBook, getBooks, addBook } = useContext(BookContext)
    const { getLibraryById, lib } = useContext(LibraryContext)
    const { libraryId } = useParams()
    const history = useHistory()
    console.log(newBook)
    let bookCoverLg = newBook.cover ? newBook.cover.large : "./../book-cover-not-found.jpg"
    console.log(bookCoverLg)
    let bookCoverMed = newBook.cover ? newBook.cover.medium : "./../book-cover-not-found.jpg";
    
    useEffect(() => {
        getLibraryById(libraryId)
         
    }, [])
    
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
            <h1 className="subtitle is-1">Add this book?</h1>
            <div className="newBookPreviewCard">
                <h1>{newBook.title}</h1>
                <h3>By: {newBook.authors[0].name}</h3>
                <a href={newBook.url} target="_blank">
                  <img src={bookCoverLg} alt="Cover of book" />
                </a>
                <p>{newBook.number_of_pages} pages</p>
                <p>Click cover for more info</p>
                
            </div>
            <button onClick={event => {
                event.preventDefault()
                handleAddNewBook()
            }}>Add to {lib.name}</button>
        </div>
        </>
    )
}

