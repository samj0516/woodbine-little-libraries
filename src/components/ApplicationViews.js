import React from "react"
import { Route } from "react-router-dom"
import { LibraryProvider } from './library/LibraryProvider'
import { LibraryList } from './library/LibraryList'
import { LibraryForm } from "./library/LibraryForm"

export const ApplicationViews = () => {
    return (
        <>
        <LibraryProvider>
        <Route exact path="/">
            <LibraryList />
        </Route>
        <Route path="/create">
            <LibraryForm />
        </Route>
        <Route path="/edit/:libraryId(\d+)">
            <LibraryForm />
        </Route>
        </LibraryProvider>
        
        </>
    )
}