import { useLocation, useHistory } from 'react-router'
import '../styles/sidebar.css'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../redux/slice'

const Sidebar = () => {
  const location = useLocation().pathname
  const history = useHistory()

  const searchInput = useSelector((state) => state.searchInput)
  const dispatch = useDispatch()

  return (
    <div className='primary'>
      <div className='elem-type'>
        <span className='material-icons'>menu</span>
      </div>
      <div className='app-title'>
        <span className='material-icons'>fact_check</span>
        <label>Schedules</label>
      </div>
      <form
        className='todo-search'
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(actions.onChangeSearchInput(''))
        }}>
        <span className='material-icons'></span>
        <input
          type='text'
          placeholder='Search todos...'
          value={searchInput}
          onChange={(e) => dispatch(actions.onChangeSearchInput(e.target.value))}
        />
      </form>
      <ul>
        <li
          style={{
            background: location === '/' ? 'rgba(0,0,0,0.2)' : '',
          }}
          onClick={() => history.push('/')}>
          <span
            className='material-icons'
            style={{
              transform: 'rotate(90deg)',
              position: 'fixed',
              left: 0,
              color: '#fff',
              opacity: location === '/' ? 1 : 0,
              transition: 'ease-out 0.2s all',
            }}>
            minimize
          </span>
          <span id='event' className='material-icons'>
            date_range
          </span>{' '}
          My day
        </li>
        <li
          style={{
            background: location === '/completed' ? 'rgba(0,0,0,0.2)' : '',
          }}
          onClick={() => history.push('/completed')}>
          <span
            className='material-icons'
            style={{
              transform: 'rotate(90deg)',
              position: 'fixed',
              left: 0,
              color: '#fff',
              opacity: location === '/completed' ? 1 : 0,
              transition: 'ease-out 0.2s all',
            }}>
            minimize
          </span>
          <span id='event' className='material-icons'>
            done_all
          </span>{' '}
          Completed
        </li>
        {/* <li
          style={{
            background: location === '/important' ? 'rgba(0,0,0,0.2)' : '',
          }}
          onClick={() => history.push('/important')}>
          <span
            className='material-icons'
            style={{
              transform: 'rotate(90deg)',
              position: 'fixed',
              left: 0,
              color: '#fff',
              opacity: location === '/important' ? 1 : 0,
              transition: 'ease-out 0.2s all',
            }}>
            minimize
          </span>
          <span className='material-icons'>notes</span>
          Important
        </li>
        <li
          style={{
            background: location === '/schedule' ? 'rgba(0,0,0,0.2)' : '',
          }}
          onClick={() => history.push('/schedule')}>
          <span
            className='material-icons'
            style={{
              transform: 'rotate(90deg)',
              position: 'fixed',
              left: 0,
              color: '#fff',
              opacity: location === '/schedule' ? 1 : 0,
              transition: 'ease-out 0.2s all',
            }}>
            minimize
          </span>
          <span className='material-icons'>schedule</span>
          Tasks
        </li> */}
      </ul>
    </div>
  )
}

export default Sidebar
