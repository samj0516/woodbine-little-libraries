import React, { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { LibraryContext } from './LibraryProvider'
import { Library } from './Library'
import './Library.css'

export const LibraryList = () => {
    const { libraries, getLibraries} = useContext(LibraryContext)
    const { libraryId } = useParams()
    useEffect(() => {
        getLibraries()
    }, [])

    return (
        <>
        <div className="libraries">
            <h4>Pick a library to select a book...</h4>
            {
                libraries.map(library =>
                     { return <Library key={library.id} library={library} />})
            }
        </div>
        </>
    )
}