import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { LibraryContext } from './LibraryProvider'
import './Library.css'


export const LibraryForm = () => {
    const { getLibraries, addLibrary, getLibraryById, updateLibrary, lib, setLib} = useContext(LibraryContext)

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

    const handleControlledInputChange = event => {
        const newLibrary = { ...library}
        newLibrary[event.target.id] = event.target.value
        setLibrary(newLibrary)
    }

    const handleSaveLibrary = () => {
        let currentUser = parseInt(sessionStorage.getItem("app_user_id"))
        if (libraryId){
            updateLibrary({
                id: parseInt(library.id),
                userId: parseInt(library.userId),
                name: library.name,
                address: library.address,
                charterNumber: library.charterNumber
            })
            .then(() => history.push('/'))
        }else {
            addLibrary({
                userId: currentUser,
                name: library.name,
                address: library.address,
                charterNumber: library.charterNumber
            })
            .then(() => history.push('/'))
        }
    }

    return(
        <form className="form libraryForm">
            <h2 className="subtitle is-1 libraryForm__title">{libraryId ? "Edit Library Info" : "Add Library"}</h2>
            
                <div className="field">
                    <label className="label" htmlFor="name">Name of Library:</label>
                    <div className="control">
                        <input className="input is-medium" type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Library Name"  value={library.name}/>
                    </div>
                </div>
           
                <div className="field">
                    <label className="label"  htmlFor="address">Address:</label>
                    <div className="control">
                        <input className="input is-rounded is-medium is-expanded" type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="123 Memory Lane, Kenosha WI 45678"  value={library.address}/>
                    </div>
                </div>
            
                <div className="field">
                    <label className="label"  htmlFor="charterNumber">Charter No.:</label>
                    <div className="control">
                        <input className="input is-medium" type="text" id="charterNumber" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="1234567"  value={library.charterNumber}/>
                    </div>
                </div>
            
            <button className="btn"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveLibrary()
                }}>{libraryId ? "Update" : "Add My Library"}</button>
        </form>
    )
} 