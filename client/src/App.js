/* Package imports */
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
/* Component imports */
import Dropdown from './components/core/Dropdown'
import Header from './components/Header'
import Login from './components/Login'
import Pages from './components/Pages'
import Registration from './components/Registration'
import { getWorkouts, getUser } from './util/api'
/* CSS imports */
import './css/App.css'
import './css/themes.css'
import './css/modules.css'

function App() {
  const [user, setUser] = useState()
  const [workouts, setWorkouts] = useState([])
  const [dropdown, setDropdown] = useState({visible: false, content: null, position: {right: 0, top: 0}})
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    async function componentDidMount() {
      setWorkouts(await getWorkouts())
      setUser(await getUser())
    }

    componentDidMount()
  }, [])

  useEffect(() => {
    // Clicking anywhere in the app hides the dropdown window.
    function onClick() {
      setDropdown({...dropdown, visible: false})
    }
    const app = document.querySelector('.app')
    app.addEventListener('click', onClick)
    // Clean up
    return () => app.removeEventListener('click', onClick)
  })
  
  return (
    <main className="app color-bg--primary color-font--primary" data-theme={theme}>
      <Dropdown visible={dropdown.visible} position={dropdown.position}>
        {dropdown.content}
      </Dropdown>
      <Header
        user={user}
        dropdown={dropdown}
        setDropdown={setDropdown}
        setWorkouts={setWorkouts}
        setUser={setUser}
      />

      <Pages
        workouts={workouts}
        setWorkouts={setWorkouts}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />

      {!user 
        &&
        <div className="l-centered">
          <Registration setWorkouts={setWorkouts} setUser={setUser} />
          <Login setWorkouts={setWorkouts} setUser={setUser} />
        </div>
      }
    </main>
  )
}

export default App;
