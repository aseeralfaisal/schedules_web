import './styles/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './redux/slice'
import Sidebar from './components/Sidebar'
import * as React from 'react'
import Calendar from 'react-calendar'
import './styles/calendar.css'

const Home = () => {
  const [todo, setTodo] = React.useState('')

  const todos = useSelector((state) => state.todosList)
  const dispatch = useDispatch()
  const [showCalendar, setShowCalendar] = React.useState(false)
  const [value, onChange] = React.useState(new Date())

  React.useEffect(() => {
    window.addEventListener('click', (e) => {
      // e.target.className !== 'react-calendar' ? setShowCalendar(false) : setShowCalendar(true)
      if (e.target.getAttribute('data') === 'calendar-icon' && e.target.getAttribute('data') === 'cal-div') {
        setShowCalendar(true)
      }
    })
  })

  return (
    <>
      <div className='bg'>
        {showCalendar && (
          <div className='calendar' data='cal-div'>
            <Calendar onChange={onChange} value={value} onClickDay={(day) => console.log(day)} />
          </div>
        )}
        <Sidebar />
        <div className='bg-img'>
          <img src='/bg-black.jpg' alt='' style={{ width: '100%', height: '100%', position: 'fixed' }} />
        </div>
        <div className='todo-list-parent'>
          {todos.map((todo, idx) => {
            return (
              <div
                className='todo-list-child'
                onClick={() => {
                  dispatch(actions.deleteTodo(todo))
                }}>
                <span class='material-icons'></span>
                <div className='todo-list'>{todo}</div>
              </div>
            )
          })}
        </div>

        <div className='showcase' style={{ opacity: todos.length < 1 ? 1 : 0, transition: 'ease-in-out 0.2s' }}>
          <div className='showcase-middle'>
            <img src='/showcase-01.png' alt='' />
            <h1>Add task to your day</h1>
          </div>
        </div>

        <form
          className='textbox'
          onSubmit={(e) => {
            e.preventDefault()
            todo !== '' && dispatch(actions.pushTodo(todo))
            setTodo('')
          }}>
          <span
            data='calendar-icon'
            className='material-icons'
            // onClick={() => (!showCalendar ? setShowCalendar(true) : setShowCalendar(false))}
          >
            event_available
          </span>
          <input
            className='todo-input'
            type='text'
            placeholder='Add a task'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </form>
      </div>
    </>
  )
}

export default Home
