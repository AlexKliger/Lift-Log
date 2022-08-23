import { useState, useEffect, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
/* Component imports */
import Dropdown from './components/Dropdown'
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
  const [dropdown, setDropdown] = useState({visible: false, content: null})
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const createWorkout = useCallback(async (body) => {
    const config = {body: JSON.stringify(body)}
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
    // Clicking anywhere in the app hides the dropdown window.
    function onClick() {
      console.log('App -> onClick')
      setDropdown({...dropdown, visible: false, content: <></>})
    }
    const app = document.querySelector('.app')
    app.addEventListener('click', onClick)
    // Clean up
    return () => app.removeEventListener('click', onClick)
  }, [])
  
  return (
    <div className="app color-bg--primary color-font--primary" data-theme={theme}>
      <Dropdown visible={dropdown.visible}>
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
                      deleteWorkout={deleteWorkout}
                      updateWorkout={updateWorkout}
                      updateLift={updateLift}
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
                        updateWorkout={updateWorkout}
                    />}
          ></Route>

          <Route
            path="new"
            element={<EditWorkout
                      createWorkout={createWorkout}
                    />}
          ></Route>
        </Route>
      </Routes>

      {!user && <Login handleSubmit={login} />}
    </div>
  )
}

export default App;
