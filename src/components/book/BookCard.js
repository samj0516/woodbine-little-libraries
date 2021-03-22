import React, { useContext, useState } from "react"
import { BookContext } from './BookProvider'
import { useHistory, useParams } from 'react-router-dom'


export const BookCard = ({ book }) => {
    const history = useHistory()
    const { getBooks, books, updateBook } = useContext(BookContext)
    const { libraryId } = useParams()
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
        .then(() => {
            history.push(`/detail/${libraryId}`)
        })
    }

    return(<>
    <section className="bookCard">
        <h4 className="bookCard__title">{book.title}</h4>
        <p>{book.author}</p>
        <a href={book.url} target="_blank">
            <img src={book.coverMed} alt="Book Cover" />
        </a>
        <p>{book.pages} pages</p>
        <button onClick={event => {
            event.preventDefault()
            handleTakeBook()
        }}>Take Book</button>
    </section>
    </>)
}