import { useCallback, useState } from "react"
import { useParams } from "react-router-dom"

const EditWorkout = ({ workouts, updateWorkout }) => {
  const { id } = useParams()
  const [workout] = useState(workouts.find((w) => w._id === id))
  const [title, setTitle] = useState(workout ? workout.title : "")

  const handleSubmit = useCallback((e) => {
    updateWorkout(id, {title: title})
    e.preventDefault()
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
    </main>
  )
}

export default EditWorkout