import { useCallback, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Stepper from "../components/Stepper"

const newWorkout = {title: "New Workout", notes: ""}

const EditWorkout = ({ workouts, updateWorkout, createWorkout }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [workout] = useState(workouts ? workouts.find((w) => w._id === id) : newWorkout)
  const [title, setTitle] = useState(workout ? workout.title : "")
  const [weight, setWeight] = useState(workout ? workout.weight : 0)
  const [notes, setNotes] = useState(workout ? workout.notes : "")
  const [date, setDate] = useState(workout.date ? workout.date.substring(0, 10) : Date.now)
  console.log('EditWorkout -> date:', date)
  const handleSubmit = useCallback((e) => {
    updateWorkout
    ?
    updateWorkout(id, {title: title, weight: weight, notes: notes, date: date})
    :
    createWorkout({title: title, weight: weight, notes: notes, date: date})
    e.preventDefault()
    navigate('/')
  })

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            value={title}
            placeholder={workout ? workout.title : ""}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            ></input>

          <label htmlFor="date">Date: </label>
          <input
            type="date"
            value={date}
            name="date"
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Weight: </label>
          <Stepper
            value={weight ? weight : 0}
            onChange={setWeight}
            stepSize={1}
          />
        </div>

        <div>
          <label htmlFor="notes">Notes: </label>
          <textarea
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" value="save"></input>
      </form>
      <button onClick={() => navigate('/')}>
        Cancel
      </button>
    </main>
  )
}

export default EditWorkout