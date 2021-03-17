import React, { useState, createContext } from "react"

export const AddBookContext = createContext()

export const AddBookProvider = (props) => {
    const [addBook, setAddBook] = useState([])

    const getAddBook = () => {
        return fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
    }
}