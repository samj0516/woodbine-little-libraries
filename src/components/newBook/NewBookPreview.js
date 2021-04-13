import React, { useContext, useEffect } from "react"
import { NewBookContext } from './NewBookProvider'
import { BookContext } from '../book/BookProvider'
import { LibraryContext } from '../library/LibraryProvider'
import { useParams, useHistory } from "react-router-dom"
export const NewBookPreview = () => {
    const { newBook, isbn } = useContext(NewBookContext)
    const { addBook } = useContext(BookContext)
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
    const currentUser = ()=>{
        if (sessionStorage.getItem("app_user_id")){
            return parseInt(sessionStorage.getItem("app_user_id"))
        }else{
            return 1 
        }
    }
    const handleAddNewBook = () => {
        addBook({
            userId: currentUser(),
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
            <h1 className="subtitle">Add this book?</h1>
            <div className="newBookPreviewCard">
                <h1 className="title is-3">{newBook.title}</h1>
                <h3 className="subtitle is-5">By: {newBook.authors[0].name}</h3>
                <a className="image " href={newBook.url} target="_blank" rel="noreferrer" >
                  <img className="" src={bookCoverLg} alt="Cover of book" />
                </a>
                <div className="details">
                    <p className="title is-4">{newBook.number_of_pages} pages</p>
                    <p className="subtitle is-6">Click cover for more info</p>
                
                <button className="button" onClick={event => {
                event.preventDefault()
                handleAddNewBook()
            }}>+Add to {lib.name}</button>
                </div>
            </div>
           
        </div>
        </>
    )
}

