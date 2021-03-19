import React, { useState, createContext, useContext } from "react"
import { NewBookContext } from './NewBookProvider'
import { BookContext } from '../book/BookProvider'

export const NewBookPreview = () => {
    const { newBook } = useContext(NewBookContext)
    const { updateBook, getBooks, addBook} = useContext(BookContext)

    return(
        <>
        <h1>{newBook}</h1>
        </>
    )
}