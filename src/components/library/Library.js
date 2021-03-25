import React, { useContext, useState }  from "react"
import { Link, useHistory, useParams } from 'react-router-dom'
import { LibraryContext } from './LibraryProvider'

import './Library.css'


export const Library = ({ library }) => {
    const history = useHistory();
    const { getLibraries, updateLibrary, deleteLibrary} = useContext(LibraryContext)
    let currentUser = parseInt(sessionStorage.getItem('app_user_id'))
    const { libraryId } = useParams()
    
    const handleDelete = () => {
        deleteLibrary(library.id)
    }
    return(
        <>
        <section className="card library">
            <Link to={`/detail/${library.id}`}>
                <h1 className="card-title library__name">{library.name}</h1>
            </Link>
            <div className="card-content">
            <div className="library__address">{library.address}</div>
            <div className="library__charter">Charter# {library.charterNumber}</div>
            </div>
            
            
                {currentUser === library.userId ?  <button className="button is-small is-warning" onClick={() => {
                history.push(`/edit/${library.id}`)
            }}>  <span className="icon is-small">
                        <i className="far fa-edit"></i>
                </span></button> : <div></div>}
            
            
                {currentUser === library.userId ?  <button className="button is-small is-danger" onClick={handleDelete}
                ><span className="icon is-small">
                    <i className="fas fa-times"></i>
                </span></button> : <div></div>}
            
            
        </section>
        </>
    )
}