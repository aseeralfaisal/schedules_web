import '../styles/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../redux/slice'
import Sidebar from './Sidebar'
import * as React from 'react'
import themes from './Themes'

const List = ({ type }) => {
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const searchInput = useSelector((state) => state.searchInput)
  const dispatch = useDispatch()

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
    if (windowWidth > 900) setOpenSidebar(false)
  }, [windowWidth])

  return (
    <>
      <div className='bg'>
        <div style={{ opacity: windowWidth > 900 ? 1 : 0 }}>
          <Sidebar />
        </div>
        <div style={{ opacity: openSidebar ? 1 : 0 }}>
          <Sidebar />
        </div>
        <div className='bg-img'>
          <img src='/abs3.jpg' alt='' style={{ width: '100%', height: '110vh', position: 'fixed' }} />
        </div>
        <div className='elem-type'>
          <span className='material-icons' onClick={() => setOpenSidebar(!openSidebar)}>
            {openSidebar ? 'menu_open' : 'menu'}
          </span>
        </div>
        {/* <div style={{ zIndex: 5, marginLeft: 400, backgroundColor: 'black'  }}>
          {themes.map((theme) => (
            <h1 style={{ fontSize: 40, color: 'white', zIndex: 2 }}>{theme}</h1>
          ))}
        </div> */}
      </div>
    </>
  )
}

export default List
