import { useState, useEffect, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
/* Component imports */
import EditWorkout from './components/EditWorkout'
import Header from './components/Header'
import Log from './components/Log'
import Login from './components/Login'
import { GET, POST, DELETE, PUT } from './util/fetch'
/* CSS imports */
import './css/App.css'
import './css/themes.css'
import './css/modules.css'

function App() {
  const [user, setUser] = useState()
  const [workouts, setWorkouts] = useState([])
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const createWorkout = useCallback(async (title) => {
    const config = {body: JSON.stringify({title: title})}
    setWorkouts(await POST(`/workouts`, config))
  }, [])

  const deleteWorkout = useCallback(async (workoutId) => {
    setWorkouts(await DELETE(`/workouts/${workoutId}`))
  }, [])

  const updateWorkout = useCallback(async (workoutId, body) => {
    const config = {body: JSON.stringify(body)}
    setWorkouts(await PUT(`/workouts/${workoutId}`, config))
  }, [])

  const updateLift = useCallback(async (liftId, body) => {
    const config = {body: JSON.stringify(body)}
    setWorkouts(await PUT(`/workouts/updateLift/${liftId}`, config))
  }, [])

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
    async function getWorkouts() {
        setWorkouts(await GET('/workouts'))
    }

    getWorkouts()
}, [])

  useEffect(() => {
    // Clicking anywhere should hide the dropdown window if it is open.
    function onClick() {
      setDropdownVisible(false)
    }
    const app = document.querySelector('.app')
    app.addEventListener('click', onClick)
    // Clean up
    return () => app.removeEventListener('click', onClick)
  })

  return (
    <div className="app color-bg--primary color-font--primary" data-theme={theme}>
      <Header
        user={user}
        logout={logout}
        dropdownVisible={dropdownVisible}
        setDropdownVisible={setDropdownVisible}
        theme={theme}
        setTheme={setTheme}
      />
      <Routes>
        <Route
          path="/"
          element={<Log
                      workouts={workouts}
                      createWorkout={createWorkout}
                      deleteWorkout={deleteWorkout}
                      updateWorkout={updateWorkout}
                      updateLift={updateLift}
                  />}
        >
        </Route>
        <Route
          path="/edit/:id"
          element={<EditWorkout workouts={workouts} />}
        >
        </Route>
      </Routes>

      {!user && <Login handleSubmit={login} />}
    </div>
  )
}

export default App;
