import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { LibraryContext } from './LibraryProvider'
import './Library.css'
import { Library } from "./Library";

export const LibraryForm = () => {
    const { getLibraries, addLibrary, getLibraryById, updateLibrary} = useContext(LibraryContext)

    const [library, setLibrary] = useState({
        id: 0,
        userId: 0,
        name: "",
        address: "",
        charterNumber: ""

    })

    const [isLoading, setIsLoading] = useState(true)
    const { libraryId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getLibraries().then(() => {
            if (libraryId){
                getLibraryById(libraryId)
                .then(library => {
                    setLibrary(library)
                    setIsLoading(false)
                })
            }else {
                setIsLoading(false)
            }
        })
    }, [])

    return(
        <form className="libraryForm">
            <h2 className="libraryForm__title">{libraryId ? "Edit Library Info" : "Add Library"}</h2>
        </form>
    )
}