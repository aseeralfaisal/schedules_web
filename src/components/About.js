import '../styles/styles.css'
import '../styles/about.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../redux/slice'
import Sidebar from './Sidebar'
import * as React from 'react'
import themes from './Themes'

const List = ({ type }) => {
  const [openSidebar, setOpenSidebar] = React.useState(false)

  const currentTheme = useSelector((state) => state.theme)
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
          <img src={currentTheme} alt='' style={{ width: '100%', height: '110vh', position: 'fixed' }} />
        </div>
        <div className='elem-type'>
          <span className='material-icons' onClick={() => setOpenSidebar(!openSidebar)}>
            {openSidebar ? 'menu_open' : 'menu'}
          </span>
        </div>
        <div className='date-view'>
          <h1 style={{ color: 'white' }}>Change theme</h1>
        </div>
        <div className='themes-gallery'>
          {themes.map((theme) => (
            <img
              className='thumbs'
              src={theme}
              alt=''
              style={{
                border: currentTheme === `${theme.slice(0, 4)}.jpg` && '5px solid rgba(255, 255, 255, 0.8)',
              }}
              onClick={() => {
                const skin = `${theme.slice(0, 4)}.jpg`
                dispatch(actions.setTheme(skin))
                console.log(skin)
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default List
