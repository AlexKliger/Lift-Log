import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Lift from './Lift'
import AddItem from './AddItem'

const DropdownContent = () => (
  <h1>Content from Workout</h1>
)

const Workout = ({workout, deleteWorkout, updateWorkout, updateLift, dropdown, setDropdown}) => {
  const addLift = useCallback((name) => {
    updateWorkout(workout._id, {lifts: [...workout.lifts, {name: name, sets: []}]})
  }, [workout])

  const deleteLift = useCallback((liftId) => {
    updateWorkout(workout._id, {lifts: [...workout.lifts.filter(lift => lift._id !== liftId)]})
  }, [workout])

  const handleClickOnNote = (e) => {
    const position = {right: e.target.offsetWidth, top: e.target.offsetTop}
    setDropdown({...dropdown, visible: true, content: <DropdownContent />, position: position})
  }

  return (
    <section className="workout">
      <div className="workout__header">
        <h2 className="workout__title font-size--large">{workout.title}</h2>
        <nav className="workout__nav">
          {workout.notes.length > 0 && <i onClick={handleClickOnNote} className="fa fa-sticky-note-o font-size--large"></i>}
          <i className="fa fa-trash font-size--large" onClick={() => deleteWorkout(workout._id)}></i>
          <Link to={`edit/${workout._id}`}>
            <i className="fa fa-pencil color-font--primary font-size--large"></i>
          </Link>
        </nav>
      </div>
      <ul>
      {workout.lifts.map((lift, key) => (
        <Lift lift={lift} deleteLift={deleteLift} updateLift={updateLift} key={key} />
      ))}
        <li>
          <AddItem
            handleSubmit={addLift}
            placeholder="Add lift"
          />
        </li>
      </ul>
    </section>
  )
}

export default Workout