import { useState } from "react"

const EditWorkout = ({ workout }) => {
  const [title, setTitle] = useState(workout.title || "")
  
  return (
    <main>
      <form>
        <label for="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}></input>
      </form>
    </main>
  )
}

export default EditWorkout