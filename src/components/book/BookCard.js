import React, { useContext } from "react"
import { BookContext } from './BookProvider'
import { useHistory, useParams } from 'react-router-dom'
import './BookCard.css'

export const BookCard = ({ book }) => {
    const history = useHistory()
    const { updateBook, addTakenBook } = useContext(BookContext)
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
    <section className="card bookCard">
        
        <a className="image" href={book.url} target="_blank">
            <img src={book.coverMed}  alt="Book Cover" />
        </a>
        
        <div className="card-content bookCard__info">
        <button className="button is-small" onClick={event => {
                event.preventDefault()
                handleTakeBook()
            }}>Take</button>
            <a className="image" href={book.url} target="_blank" rel="noreferrer" >
                <h4 className="bookCard__title has-text-weight-semibold">{book.title}</h4>
            </a>
            <p className="">{book.author}</p>
            <p className="">{book.pages} pages</p>
            
        </div>
    </section>
    </>)
}

// column is-2 is-5-mobile