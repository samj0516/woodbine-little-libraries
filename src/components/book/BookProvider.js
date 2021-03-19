import React, { useState, createContext } from "react"

export const BookContext = createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState([])

    const getBooks = () => {
        return fetch("http://localhost:8088/books?_expand=libraries&_expand=users")
        .then(res => res.json())
        .then(setBooks)
    }

    const addBook = (bookObj) => {
        return fetch("http://localhost:8088/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObj)
        })
    }

    const getBookById = (id) => {
        return fetch(`http://localhost:8088/books/${id}?_expand=library&_expand=user`)
        .then(res => res.json())
    }

    const updateBook = book => {
        return fetch(`http://localhost:8088/books/${book.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(getBooks)
    }

    return(
        <BookContext.Provider value={{ setBooks, books, getBooks, addBook, getBookById, updateBook}}>
            {props.children}
        </BookContext.Provider>
    )
}