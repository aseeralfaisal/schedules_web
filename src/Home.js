import './css/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './redux/slice'
import Sidebar from './components/Sidebar'
import * as React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const Home = () => {
  const [todo, setTodo] = React.useState('')

  const todos = useSelector((state) => state.todosList)
  const dispatch = useDispatch()

  return (
    <>
      <div className='bg'>
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

        <div className='showcase-parent' style={{ opacity: todos.length < 1 ? 1 : 0, transition: 'ease-in-out 0.2s' }}>
          <div className='middle-showcase'>
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
          <input type='text' placeholder='Add a task' value={todo} onChange={(e) => setTodo(e.target.value)} />
        </form>
      </div>
    </>
  )
}

export default Home
