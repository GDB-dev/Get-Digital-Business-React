import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Packages from './views/packages'
import WebsiteManagement from './views/website-management'
import Home from './views/home'
import PageNotFound from './views/page-not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Packages} exact path="/packages" />
        <Route component={WebsiteManagement} exact path="/website-management" />
        <Route component={Home} exact path="/" />
        <Route component={PageNotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
