import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Completed from './Completed'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/completed' component={Completed} />
        <Route exact path='/important' component={''} />
        <Route exact path='/schedule' component={''} />
      </Switch>
    </div>
  )
}

export default App
