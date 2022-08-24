import { useState, useEffect, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
/* Component imports */
import Dropdown from './components/Dropdown'
import EditWorkout from './components/EditWorkout'
import Header from './components/Header'
import Log from './components/Log'
import Login from './components/Login'
import { GET, POST, DELETE } from './util/fetch'
import { getWorkouts } from './util/api'
/* CSS imports */
import './css/App.css'
import './css/themes.css'
import './css/modules.css'

function App() {
  const [user, setUser] = useState()
  const [workouts, setWorkouts] = useState([])
  const [dropdown, setDropdown] = useState({visible: false, content: null, position: {right: 0, top: 0}})
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const login = useCallback(async (username, password) => {
    const config = {body: JSON.stringify({username: username, password: password})}
    setUser(username)
    setWorkouts(await POST('auth/login', config))
  })
  
  const logout = useCallback(async () => {
    DELETE('auth/login')
    setUser('')
    setWorkouts([])
  })

  useEffect(() => {
    async function getUser() {
      setUser(await GET('auth/user'))
    }

    getUser()
  }, [])

  useEffect(() => {
    getWorkouts(setWorkouts)
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
        logout={logout}
        dropdown={dropdown}
        setDropdown={setDropdown}
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

      {!user && <Login handleSubmit={login} />}
    </div>
  )
}

export default App;
