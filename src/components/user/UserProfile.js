import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'
import { BookContext } from '../book/BookProvider'

export const UserProfile = () => {
    const {getTakenBooks, getBooks, books, takenBooks} = useContext(BookContext)
    const currentUser = parseInt(sessionStorage.getItem('app_user_id'))
    
    useEffect(() => {
        getBooks()
        .then(getTakenBooks)
    }, [])
}