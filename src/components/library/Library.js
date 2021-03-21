import React, { useContext, useState }  from "react"
import { useHistory, useParams } from 'react-router-dom'
import { LibraryContext } from './LibraryProvider'

import './Library.css'


export const Library = ({ library }) => {
    const history = useHistory();
    const { getLibraries, updateLibrary, deleteLibrary} = useContext(LibraryContext)
    let currentUser = parseInt(sessionStorage.getItem('app_user_id'))
    const { libraryId } = useParams()

    return(
        <>
        <section className="library">
            <h4 className="library__name">{library.name}</h4>
            <div className="library__address">{library.address}</div>
            <div className="library__charter">Charter# {library.charterNumber}</div>
            <div>
                {currentUser === library.userId ?  <button onClick={() => {
                history.push(`/edit/${library.id}`)
            }}>Edit my library</button> : <div></div>}
            </div>
            <div>
                <button onClick={() => {
                history.push(`/add/${library.id}`)
            }}>Add A Book</button> 
            </div>
        </section>
        </>
    )
}