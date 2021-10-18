import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Completed from './Completed'
import About from './components/About'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/completed' component={Completed} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  )
}

export default App
