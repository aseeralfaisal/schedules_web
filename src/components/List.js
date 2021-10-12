import '../styles/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../redux/slice'
import Sidebar from './Sidebar'
import * as React from 'react'
import Calendar from 'react-calendar'
import '../styles/calendar.css'

const List = ({ type }) => {
  const [todo, setTodo] = React.useState('')

  const todos = useSelector((state) => state.todosList)
  const completedTodos = useSelector((state) => state.completed)
  const dispatch = useDispatch()
  const date = new Date()

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const [showCalendar, setShowCalendar] = React.useState(false)
  const [dateVal, setDateVal] = React.useState(date)
  const dateValue = `${dateVal.toDateString().slice(0, 3)} , ${dateVal.toDateString().slice(4, 10)} , ${dateVal
    .toDateString()
    .slice(10, 15)}`

  React.useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.getAttribute('data') !== 'calendar-icon') {
        if (e.target.className !== 'calendar' || '') {
          setShowCalendar(false)
        } else setShowCalendar(true)
      }
    })
  }, [])

  // React.useEffect(() => {
  //   ;(async () => {
  //     if (Notification.permission !== 'default' || 'granted') {
  //       const notify = await Notification.requestPermission()
  //       console.log(notify)
  //       if (notify === 'granted') {
  //         const noti = new Notification('Schedules', {
  //           body: 'Hey mate, how are ya!!',
  //           icon: '/favicon.ico',
  //           timestamp: 50,
  //           badge: '',
  //         })
  //         noti.onclick = () => {
  //           console.log('clicked notification')
  //         }
  //       }
  //     }
  //   })()
  // }, [])

  console.log(completedTodos)

  const onSubmit = (e) => {
    e.preventDefault()
    const itodo = { todo: todo, date: dateValue }
    todo !== '' && dispatch(actions.pushTodo(itodo))
    setTodo('')
    setDateVal(new Date())
  }

  return (
    <>
      <div className='bg'>
        {showCalendar && (
          <div className='calendar'>
            <Calendar onChange={setDateVal} value={dateVal} onClickDay={(day) => console.log(day)} />
          </div>
        )}
        <Sidebar />
        <div className='bg-img'>
          <img src='/abs1.jpg' alt='' style={{ width: '100%', height: '100%', position: 'fixed' }} />
        </div>
        <div className='date-view'>
          <h1 style={{ color: 'white' }}>{`${dayNames[date.getDay()]}, ${date.toDateString().slice(4, 11)}`}</h1>
        </div>
        {type !== 'completed' ? (
          <div className='todo-list-parent'>
            {todos.map((todo, idx) => {
              return (
                <div
                  key={idx}
                  className='todo-list-child'
                  onClick={() => {
                    dispatch(actions.pushCompleted(todo))
                    dispatch(actions.completedTodo(todo))
                  }}>
                  <span className='material-icons'></span>
                  <div className='todo-list'>
                    <h4 style={{ textTransform: 'capitalize' }}>{todo.todo}</h4>
                    <div className='calendar-icon'>
                      <span className='material-icons'></span>
                    </div>
                    <label style={{ fontSize: 12, marginLeft: 60 }}>{todo.date}</label>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className='todo-list-parent'>
            {completedTodos.map((todo, idx) => {
              return (
                <div
                  key={idx}
                  className='todo-list-child'
                  // onClick={() => {
                  //   dispatch(actions.pushCompleted(todo))
                  //   dispatch(actions.completedTodo(todo))
                  // }}
                >
                  {type !== 'completed' ? (
                    <span className='material-icons'></span>
                  ) : (
                    <div className='completed-task'>
                      <span className='material-icons'></span>
                    </div>
                  )}
                  <div className='todo-list'>
                    <h4 style={{ textTransform: 'capitalize' }}>{todo.todo}</h4>
                    <div className='calendar-icon'>
                      <span className='material-icons'></span>
                    </div>
                    <label style={{ fontSize: 12, marginLeft: 60 }}>{todo.date}</label>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {type !== 'completed' && (
          <div>
            {todos.length < 1 && (
              <div className='showcase' style={{ opacity: todos.length < 1 ? 1 : 0, transition: 'ease-in-out 0.2s' }}>
                <div className='showcase-middle'>
                  <img src='/showcase.png' alt='' />
                  <h1>Add task to your day</h1>
                </div>
              </div>
            )}
          </div>
        )}

        <form className='textbox' onSubmit={(e) => onSubmit(e)}>
          <span
            data='calendar-icon'
            className='material-icons'
            onClick={() => (!showCalendar ? setShowCalendar(true) : setShowCalendar(false))}>
            event_available
          </span>

          <input
            className='todo-input'
            type='text'
            placeholder=' + Add a task'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </form>
      </div>
    </>
  )
}

export default List
