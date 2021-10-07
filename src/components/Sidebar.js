import { useLocation, useHistory } from 'react-router'
import '../css/sidebar.css'
import * as React from 'react'
const Sidebar = () => {
  const location = useLocation().pathname
  const history = useHistory()

  return (
    <div className='primary'>
      <div className='app-title'>
        <span className='material-icons'>event_available</span>
        <label>Schedules</label>
      </div>
      <ul>
        <li data-attr='/home' onClick={() => history.push('/')}>
          <span
            className='material-icons'
            style={{
              transform: 'rotate(90deg)',
              position: 'fixed',
              left: 0,
              color: '#fff',
              opacity: location === '/' ? 1 : 0,
              transition: 'ease-out 0.2s all'
            }}>
            minimize
          </span>
          <span className='material-icons'>light</span> My day
        </li>
        <li onClick={() => history.push('/important')}>
          <span
            className='material-icons'
            style={{
              transform: 'rotate(90deg)',
              position: 'fixed',
              left: 0,
              color: '#fff',
              opacity: location === '/important' ? 1 : 0,
              transition: 'ease-out 0.2s all'
            }}>
            minimize
          </span>
          <span className='material-icons'>notes</span>
          Important
        </li>
        <li onClick={() => history.push('/schedule')}>
          <span
            className='material-icons'
            style={{
              transform: 'rotate(90deg)',
              position: 'fixed',
              left: 0,
              color: '#fff',
              opacity: location === '/schedule' ? 1 : 0,
              transition: 'ease-out 0.2s all'
            }}>
            minimize
          </span>
          <span className='material-icons'>schedule</span>
          Tasks
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
