import React from "react"
import { Route } from "react-router-dom"
import { LibraryProvider } from './library/LibraryProvider'
import { Library } from './library/Library'
import { LibraryList } from './library/LibraryList'

export const ApplicationViews = () => {
    return (
        <>
        <LibraryProvider>
        <Route exact path="/">
            <LibraryList />
        </Route>
        </LibraryProvider>
        
        </>
    )
}