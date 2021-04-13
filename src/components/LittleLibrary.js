import React from 'react'
// import { Route, Redirect } from "react-router-dom"
// import { userStorageKey } from "./auth/authSettings"
import { UserProvider } from './user/UserProvider'
import { ApplicationViews } from './ApplicationViews'
import { NavBar } from './nav/Nav.js'
import { Footer } from './footer/Footer'
// import 'bulma/css/bulma.css'
import '../css/mystyles.css'
export const LittleLibrary = () => (
  
            <>
              {/* //Components that are rendered when the user is authenticated go inside this React fragment */}
              <UserProvider>
                <NavBar />
              </UserProvider>
              <ApplicationViews />
              <Footer />
              
            </>
          )
        