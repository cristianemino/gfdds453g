import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Route>
            <Link to="/page1">Pagina 1</Link>
            <Link to="/page2">Pagina 2</Link>
          </Route>
        </nav>
        <Switch>
        <Route exact path='/'>
            <Page1/>
          </Route>
          <Route path='/Page1'>
            <Page1/>
          </Route>
          <Route path='/Page2'>
            <Page2/>
          </Route>
          <Route path='/'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}