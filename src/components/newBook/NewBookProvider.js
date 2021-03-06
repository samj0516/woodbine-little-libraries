import React, { useState, createContext, useContext } from "react"
import { BookContext } from '../book/BookProvider'
export const NewBookContext = createContext()

export const NewBookProvider = (props) => {
    const { getBooks } = useContext(BookContext)
    const [newBook, setNewBook] = useState({})
    const [isbn, setIsbn] = useState("")
    
    const getNewBook = (isbn) => {
        return fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`)
        .then(res => res.json())
        .then((data) => 
            setNewBook(data[`ISBN:${isbn}`]))
    }
   

    const addNewBook = (bookObj) => {
        return fetch("https://little-library-api.herokuapp.com/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObj)
        })
        .then(getBooks)
    }

    return (
        <NewBookContext.Provider value={{ isbn, setIsbn, newBook, getNewBook, addNewBook, setNewBook }}>
            {props.children}
        </NewBookContext.Provider>
    )
}