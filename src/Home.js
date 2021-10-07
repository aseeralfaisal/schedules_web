import './css/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './redux/slice'
import Sidebar from './components/Sidebar'
import * as React from 'react'
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
        {todos.map((todo) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                position: 'fixed',
              }}>
              <div style={{ color: 'black', zIndex: 1 }}>{todo}</div>
            </div>
          )
        })}
        <div className='showcase-parent'>
          <div className='middle-showcase'>
            <img src='/showcase-01.png' alt='' />
            <h1>Add task to your day</h1>
          </div>
        </div>
        <form
          className='textbox'
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(actions.pushTodo(todo))
            setTodo('')
          }}>
          <input type='text' placeholder='Add a task' value={todo} onChange={(e) => setTodo(e.target.value)} />
        </form>
      </div>
    </>
  )
}

export default Home
