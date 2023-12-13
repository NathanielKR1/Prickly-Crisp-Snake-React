import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import NotFound1, { NotFound } from './views/not-found'
import Home1 from './views/home1'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={Home1} exact path="/home1" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
