import React, { useState, createContext } from "react"

export const BookContext = createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState([])
    const [takenBooks, setTakenBooks] = useState([])

    const getBooks = () => {
        return fetch("https://little-library-api.herokuapp.com/books?_expand=user&_expand=library")
        .then(res => res.json())
        .then(setBooks)
    }

    const addBook = (bookObj) => {
        return fetch("https://little-library-api.herokuapp.com/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObj)
        })
        .then(getBooks)
    }

    const getBookById = (id) => {
        return fetch(`https://little-library-api.herokuapp.com/books/${id}?_expand=library&_expand=user`)
        .then(res => res.json())
    }

    const updateBook = book => {
        return fetch(`https://little-library-api.herokuapp.com/books/${book.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(getBooks)
    }

    const addTakenBook = (takenObj) => {
        return fetch("https://little-library-api.herokuapp.com/takenBooks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(takenObj)
        })
        .then(getTakenBooks)
    }

    const getTakenBooks = () => {
        return fetch("https://little-library-api.herokuapp.com/takenBooks")
        .then(res => res.json())
        .then(setTakenBooks)
    }

    return(
        <BookContext.Provider value={{ setBooks, books, getBooks, addBook, getBookById, updateBook, addTakenBook, takenBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}