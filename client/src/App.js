import './App.css';
import { useState, useEffect, useCallback } from 'react'
import Log from './components/Log'
import Header from './components/Header'
import Login from './components/Login'
import { GET, POST, DELETE, PUT } from './util/fetch'

function App() {
  const [user, setUser] = useState()
  const [workouts, setWorkouts] = useState([])

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

  return (
    <div>
      <Header />
      <h3>User: {user ? user.username : 'none'}</h3>
      <Log workouts={workouts} createWorkout={createWorkout} deleteWorkout={deleteWorkout} updateWorkout={updateWorkout} updateLift={updateLift} />
      <Login handleSubmit={login} />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
