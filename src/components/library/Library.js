import React, { useContext }  from "react"
import { Link, useHistory } from 'react-router-dom'
import { LibraryContext } from './LibraryProvider'

import './Library.css'


export const Library = ({ library }) => {
    const history = useHistory();
    const { deleteLibrary} = useContext(LibraryContext)
    let currentUser = parseInt(sessionStorage.getItem('app_user_id'))
    
    
    const mapQuery = () => {
        const address = library.address
        const searchOne = ' ';
        const replaceOne = '+'; 
        let loc = address.replaceAll(searchOne, replaceOne)
        let mapUrl = `https://www.google.com/maps/place/${loc}`
        return mapUrl
    }
   
    
    const handleDelete = () => {
        deleteLibrary(library.id)
    }
    return(
        <>
        <section className="column is-4 card library">
            <Link to={`/detail/${library.id}`}>
                <h1 className="card-title library__name">{library.name}</h1>
            </Link>
            <div className="card-content">
            <a href={mapQuery()} target="_blank" rel="noreferrer" >
                <div className="library__address">{library.address}</div>
            </a>
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