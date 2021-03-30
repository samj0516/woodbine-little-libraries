import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"
import { ApplicationViews } from './ApplicationViews'
import { NavBar } from './nav/Nav.js'
import { Footer } from './footer/Footer'
// import 'bulma/css/bulma.css'
import '../css/mystyles.css'
export const LittleLibrary = () => (
  <>
<Route render={() => {
        if (sessionStorage.getItem(userStorageKey)) {
          return (
            <>
              {/* //Components that are rendered when the user is authenticated go inside this React fragment */}
              <NavBar />
              <ApplicationViews />
              <Footer />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
    }} 
/>

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)