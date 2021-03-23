import React from "react"
import { Route } from "react-router-dom"
import { LibraryProvider } from './library/LibraryProvider'
import { LibraryList } from './library/LibraryList'
import { LibraryForm } from "./library/LibraryForm"
import { NewBookProvider } from './newBook/NewBookProvider'
import { NewBookLookup } from './newBook/NewBookLookup'
import { BookProvider } from './book/BookProvider'
import { NewBookPreview } from "./newBook/NewBookPreview"
import { LibraryDetail } from './library/LibraryDetails'


export const ApplicationViews = () => {
    return (
        <>
        <BookProvider>
        <LibraryProvider>
        <Route exact path="/">
            <LibraryList />
        </Route>
        <Route path="/create">
            <LibraryForm />
        </Route>
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
        
        </>
    )
}