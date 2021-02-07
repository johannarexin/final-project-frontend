import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/Home.js'
import { Nav } from './components/Nav.js'
import { Ceramics } from './components/Ceramics.js'
import { About } from './components/About.js'
import { Footer } from './components/Footer.js'
import { Singleproduct } from './components/Singleproduct.js'

import './styling/App.css'


export const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ceramics" exact component={Ceramics} />
          <Route path="/ceramics/:id" component={Singleproduct} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}