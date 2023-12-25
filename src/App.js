import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import GradeAutoFiller from './components/GradeAutoFiller'
import BubbleSheet from './components/BubbleSheet'
import Success from './components/Success'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/grade">
          <GradeAutoFiller />
        </Route>
        <Route path="/bubble">
          <BubbleSheet />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App