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
        method: 'post',
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
            method: 'delete',
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
        method: 'put',
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
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...body})
      })

      const data = await res.json()
      setWorkouts(data)
    } catch (err) {
      console.err(err)
    }
  }

  async function login(username, password) {
    try {
      await fetch('/auth/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username, password: password})
      })
    } catch (err) {
      console.err(err)
    }
  }

  useEffect(() => {
    async function fetchWorkouts() {
      const res = await fetch('/workouts', {
        method: 'get',
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
    </div>
  );
}

export default App;
