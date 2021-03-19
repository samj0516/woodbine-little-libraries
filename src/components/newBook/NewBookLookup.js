import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { NewBookContext } from './NewBookProvider'
import './NewBook.css'

export const NewBookLookup = () => {
    const { setNewBook, newBook, getNewBook, isbn, setIsbn } = useContext(NewBookContext)
    const history = useHistory()

    const handleInputChange = (event) => {
        const newIsbn = parseInt(event.target.value)
        setIsbn(newIsbn)
        
    }
    
    const handleNewBookLookup = () => {
      console.log(isbn)
      getNewBook(isbn)
    //   .then((data) => setNewBook(data))
      .then(() => history.push('/addPreview'))
      
    }
    
    return(
        <form className="newBookLookupForm">
            <h2 className="newBookLookupForm__title">Add Your Book</h2>
            <fieldset>
                <label htmlFor="isbn">Enter ISBN #: </label>
                <input type="text" id="isbn" onChange={handleInputChange}  required autoFocus className="form-control" placeholder="" />
            </fieldset>
            <button className="btn" onClick={e => {
                e.preventDefault()
                handleNewBookLookup()}}>Find Book</button>
        </form>
    )
} 