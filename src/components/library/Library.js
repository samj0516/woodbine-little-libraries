import React, { useContext, useState }  from "react"
import { useHistory } from 'react-router-dom'
import { LibraryContext } from './LibraryProvider'
import './Library.css'


export const Library = ({ library }) => {
    const history = useHistory();
    const { getLibraries, updateLibrary, deleteLibrary} = useContext(LibraryContext)

    return(
        <>
        <section className="library">
            <h4 className="library__name">{library.name}</h4>
            <div className="library__address">{library.address}</div>
            <div className="library__charter">Charter# {library.charterNumber}</div>
        </section>
        </>
    )
}