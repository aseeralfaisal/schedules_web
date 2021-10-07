import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/important' component={Home} />
        <Route exact path='/schedule' component={Home} />
      </Switch>
    </div>
  )
}

export default App
