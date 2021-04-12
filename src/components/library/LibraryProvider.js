import React, { useState, createContext } from "react"

export const LibraryContext = createContext()

export const LibraryProvider = (props) => {
    const [libraries, setLibraries] = useState([])
    const [lib, setLib] = useState({})
    const getLibraries = () => {
        return fetch("https://little-library-api.herokuapp.com/libraries?_expand=user")
        .then(res => res.json())
        .then(setLibraries)
    }

    const addLibrary = (library) => {
        return fetch("https://little-library-api.herokuapp.com/libraries",  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(library)
        })
        .then(getLibraries)
    }

    const getLibraryById = (id) => {
        return fetch(`https://little-library-api.herokuapp.com/libraries/${id}`)
            .then(res => res.json())
            
    }

    const deleteLibrary = (id) => {
        return fetch(`https://little-library-api.herokuapp.com/libraries/${id}`, {
            method: "DELETE"
        })
            .then(getLibraries)
    }

    const updateLibrary = library => {
        return fetch(`https://little-library-api.herokuapp.com/libraries/${library.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(library)
        })
          .then(getLibraries)
      }

    return (
        <LibraryContext.Provider value={{
            libraries, getLibraries, addLibrary, getLibraryById, deleteLibrary, updateLibrary, lib, setLib
        }}>
            {props.children}
        </LibraryContext.Provider>
    )
}