import { useState, useEffect, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
/* Component imports */
import Dropdown from './components/Dropdown'
import EditWorkout from './components/EditWorkout'
import Header from './components/Header'
import Log from './components/Log'
import Login from './components/Login'
import { getWorkouts, getUser } from './util/api'
/* CSS imports */
import './css/App.css'
import './css/themes.css'
import './css/modules.css'

function App() {
  const [user, setUser] = useState()
  const [workouts, setWorkouts] = useState([])
  const [dropdown, setDropdown] = useState({visible: false, content: null, position: {right: 0, top: 0}})
  const [theme, setTheme] = useLocalStorage('theme', 'light')

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
    <div className="app color-bg--primary color-font--primary" data-theme={theme}>
      <Dropdown visible={dropdown.visible} position={dropdown.position}>
        {dropdown.content}
      </Dropdown>
      <Header
        user={user}
        dropdown={dropdown}
        setDropdown={setDropdown}
        setWorkouts={setWorkouts}
        setUser={setUser}
        theme={theme}
        setTheme={setTheme}
      />
      <Routes>
        <Route
          path="/"
          element={<Log
                      workouts={workouts}
                      setWorkouts={setWorkouts}
                      dropdown={dropdown}
                      setDropdown={setDropdown}
                  />}
        >
        </Route>
        <Route path="edit">
          <Route
            path=":id"
            element={<EditWorkout
                        workouts={workouts}
                        setWorkouts={setWorkouts}
                    />}
          ></Route>

          <Route
            path="new"
            element={<EditWorkout
                      setWorkouts={setWorkouts}
                    />}
          ></Route>
        </Route>
      </Routes>

      {!user && <Login setWorkouts={setWorkouts} setUser={setUser} />}
    </div>
  )
}

export default App;
