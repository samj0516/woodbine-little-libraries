import React, { useState, createContext } from "react"

export const LibraryContext = createContext()

export const LibraryProvider = (props) => {
    const [libraries, setLibraries] = useState([])

    const getLibraries = () => {
        return fetch("http://localhost:8088/libraries?_expand=user")
        .then(res => res.json())
        .then(setLibraries)
    }

    const addLibrary = (library) => {
        return fetch("http://localhost:8088/libraries",  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(library)
        })
        .then(getLibraries)
    }

    const getLibraryById = (id) => {
        return fetch(`http://localhost:8088/libraries/${id}`)
            .then(res => res.json())
    }

    const deleteLibrary = (id) => {
        return fetch(`http://localhost:8088/libraries/${id}`, {
            method: "DELETE"
        })
            .then(getLibraries)
    }

    const updateLibrary = library => {
        return fetch(`http://localhost:8088/libraries/${library.id}`, {
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
            libraries, getLibraries, addLibrary, getLibraryById, deleteLibrary, updateLibrary
        }}>
            {props.children}
        </LibraryContext.Provider>
    )
}