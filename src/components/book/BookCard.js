import React, { useContext, useState } from "react"
import { BookContext } from './BookProvider'
import { useHistory, useParams, Route } from 'react-router-dom'
import './BookCard.css'

export const BookCard = ({ book }) => {
    const history = useHistory()
    const { getBooks, books, updateBook, addTakenBook } = useContext(BookContext)
    const { libraryId } = useParams()
    let currentUser = parseInt(sessionStorage.getItem('app_user_id'))
    const handleTakeBook = () => {
        updateBook({
            id: book.id,
            userId: book.userId,
            libraryId: book.libraryId,
            deleted: true,
            title: book.title,
            author: book.author,
            coverMed: book.coverMed,
            coverLarge: book.coverLarge,
            isbn: book.isbn,
            url: book.url,
            pages: book.pages
        })
        addTakenBook({
            userId: currentUser,
            bookId: book.id
        })
        .then(() => {
            history.push(`/detail/${libraryId}`)
        })
    }

    return(<>
    <section className="column card bookCard">
        <div className="card-image">
        <a className="image is-3by4" href={book.url} target="_blank">
            <img src={book.coverMed} alt="Book Cover" />
        </a>
        </div>
        <div className="card-content bookCard__info">
            <h4 className="bookCard__title has-text-weight-semibold">{book.title}</h4>
            <p className="">{book.author}</p>
            <p className="">{book.pages} pages</p>
            <button className="button is-small" onClick={event => {
                event.preventDefault()
                handleTakeBook()
            }}>Take Book</button>
        </div>
    </section>
    </>)
}