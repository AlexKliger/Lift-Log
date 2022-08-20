import { useCallback, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const newWorkout = {title: "New Workout", notes: ""}

const EditWorkout = ({ workouts, updateWorkout, createWorkout }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [workout] = useState(workouts ? workouts.find((w) => w._id === id) : newWorkout)
  const [title, setTitle] = useState(workout ? workout.title : "")

  const handleSubmit = useCallback((e) => {
    updateWorkout
    ?
    updateWorkout(id, {title: title})
    :
    createWorkout(title)
    e.preventDefault()
    navigate('/')
  })

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          value={title}
          placeholder={workout ? workout.title : ""}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          >
        </input>
        <input type="submit" value="save"></input>
      </form>
      <button onClick={() => navigate('/')}>
        Cancel
      </button>
    </main>
  )
}

export default EditWorkout