import React, { useContext } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { NewBookContext } from './NewBookProvider'
import './NewBook.css'

export const NewBookLookup = () => {
    const { getNewBook, isbn, setIsbn } = useContext(NewBookContext)
    const history = useHistory()
    const { libraryId } = useParams()
    const handleInputChange = (event) => {
        const newIsbn = parseInt(event.target.value)
        setIsbn(newIsbn)
        
    }
    
    const handleNewBookLookup = () => {
      console.log(isbn)
      getNewBook(isbn)
    //   .then((data) => setNewBook(data))
      .then(() => history.push(`/addPreview/${libraryId}`))
      
    }
    
    return(
        <form className="newBookLookupForm">
            <h2 className="subtitle is-1 newBookLookupForm__title">Add Your Book...</h2>
            <div className="field">
                <label htmlFor="isbn">Enter ISBN #: </label>
                <div className="control">
                    <input className="input is-normal" type="text" id="isbn" onChange={handleInputChange}  required autoFocus placeholder="" />
                </div>
            <button className="button is-normal" onClick={e => {
                e.preventDefault()
                handleNewBookLookup()}}>Find Book</button>
            </div>
        </form>
    )
} 