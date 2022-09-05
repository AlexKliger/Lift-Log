import { useCallback, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Stepper from "./core/Stepper"
import { createWorkout, updateWorkout } from '../util/api'

const newWorkout = {title: "New Workout", notes: ""}

const EditWorkout = ({ workouts, setWorkouts }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [workout] = useState(workouts ? workouts.find((w) => w._id === id) : newWorkout)
  const [title, setTitle] = useState(workout ? workout.title : "")
  const [weight, setWeight] = useState(workout ? workout.weight : 0)
  const [notes, setNotes] = useState(workout ? workout.notes : "")
  const [date, setDate] = useState(workout.date ? workout.date.split('T')[0] : new Date(Date.now()).toISOString().split('T')[0])
  
  const handleSubmit = useCallback(async (e) => {
    const body = {title: title, weight: weight, notes: notes, date: date}
    e.preventDefault()
    workouts
    ?
    setWorkouts(await updateWorkout(id, body))
    :
    setWorkouts(await createWorkout(body))
    navigate('/')
  })

  return (
    <div className="l-centered">
      <form style={{"display": "flex", "flexDirection": "column"}} className="form" onSubmit={handleSubmit}>
        <label className="font-size--large" htmlFor="title">Title: </label>
        <input
          type="text"
          value={title}
          name="title"
          placeholder={workout ? workout.title : ""}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label className="font-size--large" htmlFor="date">Date: </label>
        <input
          type="date"
          value={date}
          name="date"
          onChange={(e) => setDate(e.target.value)}
        ></input>

        <label className="font-size--large" htmlFor="notes">Notes: </label>
        <textarea
          name="notes"
          value={notes}
          placeholder="optional"
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        <label className="font-size--large">Weight: </label>
        <Stepper
          value={weight ? weight : 0}
          onChange={setWeight}
          stepSize={1}
        />

        <div>
          <button className="button--form color-font--primary font-size--large" type="submit">Save</button>
          <button className="button--form color-font--primary font-size--large" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditWorkout