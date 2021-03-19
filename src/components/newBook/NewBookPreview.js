import React, { useState, createContext, useContext } from "react"
import { NewBookContext } from './NewBookProvider'
import { BookContext } from '../book/BookProvider'

export const NewBookPreview = () => {
    const { newBook, isbn } = useContext(NewBookContext)
    const { updateBook, getBooks, addBook} = useContext(BookContext)
    console.log(newBook)
    
    
    return( 
        <>
        <h1>{newBook.title}</h1>
        </>
    )
}