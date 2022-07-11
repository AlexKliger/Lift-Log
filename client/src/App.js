import {useEffect, useState} from 'react'
import './App.css';
import Log from "./components/Log"

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
        console.log(err)
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
        console.log(err)
    }
  }

  async function addLiftToWorkout(id, name) {
    try {
        const res = await fetch(`/workouts/${id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name})
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
        method: 'get',
        header: {'Content-Type': 'application/json'}
      })

      const data = await res.json()
      setWorkouts(data)
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="App">
      <Log workouts={workouts} createWorkout={createWorkout} deleteWorkout={deleteWorkout} addLiftToWorkout={addLiftToWorkout} />
    </div>
  );
}

export default App;
