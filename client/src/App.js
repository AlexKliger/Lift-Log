import {useEffect, useState} from 'react'
import './App.css';
import Log from './components/Log'
import Header from './components/Header'
import Login from './components/Login'

function App() {
  const [workouts, setWorkouts] = useState([])

  async function createWorkout(title) {
    try {
      const res = await fetch('/workouts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title})
      })

      const data = await res.json()
      setWorkouts(data)
    } catch (err) {
      console.err(err)
    }
}

  async function deleteWorkout(id) {
    try {
        const res = await fetch(`/workouts/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        
        const data = await res.json()
        setWorkouts(data)
    } catch (err) {
        console.err(err)
    }
  }

  async function updateWorkout(id, body) {
    console.log('updateWorkout called')
    try {
      const res = await fetch(`/workouts/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...body})
      })

      const data = await res.json()
      setWorkouts(data)
    } catch (err) {
      console.err(err)
    }
  }

  async function updateLift(id, body) {
    try {
      const res = await fetch(`/workouts/updateLift/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...body})
      })

      const data = await res.json()
      setWorkouts(data)
    } catch (err) {
      console.log(err)
    }
  }

  async function login(username, password) {
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username, password: password})
      })
      const data = await res.json()
      setWorkouts(data)
    } catch (err) {
      console.log(err)
    }
  }

  async function logout() {
    try {
      const res = await fetch('auth/logout', {
        method: 'DELETE',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'}
      })
      const data = await res.json()
      console.log(data)
      setWorkouts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function fetchWorkouts() {
      const res = await fetch('/workouts', {
        method: 'GET',
        header: {'Content-Type': 'application/json'}
      })

      const data = await res.json()
      setWorkouts(data)
    }

    fetchWorkouts()
  }, [])

  const requests = {
    createWorkout: createWorkout,
    deleteWorkout: deleteWorkout,
    updateWorkout: updateWorkout,
    updateLift: updateLift
  }

  return (
    <div>
      <Header requests={requests} />
      <Log workouts={workouts} requests={requests} />
      <Login handleSubmit={login} />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
