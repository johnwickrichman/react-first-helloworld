import React from "react"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import HomePage from "./page/HomePage"
// import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AboutPage from "./page/AboutPage"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

      </Switch>
      <Footer />
    </Router>
  )
}

export default App
