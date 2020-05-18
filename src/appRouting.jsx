import React from 'react'

import Home from './components/Homepage/homePage'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
