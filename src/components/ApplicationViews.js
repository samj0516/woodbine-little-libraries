import React from "react"
import { Route, Redirect } from "react-router-dom"
import { LibraryProvider } from './library/LibraryProvider'
import { LibraryList } from './library/LibraryList'
import { LibraryForm } from "./library/LibraryForm"
import { NewBookProvider } from './newBook/NewBookProvider'
import { NewBookLookup } from './newBook/NewBookLookup'
import { BookProvider } from './book/BookProvider'
import { NewBookPreview } from "./newBook/NewBookPreview"
import { LibraryDetail } from './library/LibraryDetails'
import { Login } from './auth/Login'
import { Register } from './auth/Register'


export const ApplicationViews = () => {
    return (
        <>
        <BookProvider>
        <LibraryProvider>
        <Route exact path="/">
            <LibraryList />
        </Route>
        <Route exact path="/create" render={() => localStorage.getItem("app_user_id") ? <LibraryForm /> : <Redirect to="/login" />} />
            
        
        <Route path="/edit/:libraryId(\d+)">
            <LibraryForm />
            <LibraryDetail />
        </Route>
        <Route path="/detail/:libraryId(\d+)">
            <LibraryDetail />
        </Route>

        <NewBookProvider>
            <Route path="/add/:libraryId(\d+)">
                <NewBookLookup />
            </Route>
            <Route path='/addPreview/:libraryId(\d+)'>
                <NewBookPreview  />
            </Route>
        </NewBookProvider>
        </LibraryProvider>
        </BookProvider>
        
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
        
        </>
    )
}