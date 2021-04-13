import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const getUsers = () => {
        return fetch("https://little-library-api.herokuapp.com/users")
        .then(res => res.json())
        .then(setUsers)
    }
    const getUserById = (id) => {
        return fetch(`https://little-library-api.herokuapp.com/users/${id}`)
        .then(res => res.json())
    }
    return(
        <UserContext.Provider value={{ 
            users, getUsers, getUserById 
        }}>
            {props.children}
        </UserContext.Provider>
    )
}