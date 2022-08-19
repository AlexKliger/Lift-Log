import { useState } from "react"
import { useParams } from "react-router-dom"

const EditWorkout = ({ workouts }) => {
  const { id } = useParams()
  const [workout] = useState(workouts.find((w) => w._id === id))
  const [title, setTitle] = useState(workout ? workout.title : "")
  return (
    <main>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          value={title}
          placeholder={workout ? workout.title : ""}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          >
        </input>
      </form>
    </main>
  )
}

export default EditWorkout