import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Lift from './lift/Lift'
import AddItem from '../core/AddItem'
import { deleteWorkout, updateWorkout } from '../../util/api'

const DropdownContent = ({notes}) => (
  <p>{notes}</p>
)

const Workout = ({workout, setWorkouts, dropdown, setDropdown}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const addLift = useCallback(async (name) => {
    const body = {lifts: [...workout.lifts, {name: name, sets: []}]}
    setWorkouts(await updateWorkout(workout._id, body))
  }, [workout])

  const deleteLift = useCallback(async (liftId) => {
    const body = {lifts: [...workout.lifts.filter(lift => lift._id !== liftId)]}
    setWorkouts(await updateWorkout(workout._id, body))
  }, [workout])

  const handleClickOnNote = useCallback(e => {
    const yOffset = window.scrollY
    const xOffset = window.scrollX
    const position = {left: e.pageX - xOffset, top: e.pageY - yOffset}
    setDropdown({...dropdown, visible: true, content: <DropdownContent notes={workout.notes} />, position: position})
  })

  return (
    <section className="workout">
      <div className="workout__header">
        <i  
          className={`fa fa-angle-${isCollapsed ? 'down' : 'up'} font-size--large`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        ></i>
        <h2 className="workout__title font-size--large">{workout.title}</h2>
        <span>{workout.date.split('T')[0]}</span>
        <nav className="workout__nav">
          {workout.notes.length > 0 && <i onClick={handleClickOnNote} className="fa fa-sticky-note-o font-size--large"></i>}
          <i className="fa fa-trash font-size--large" onClick={async () => setWorkouts(await deleteWorkout(workout._id))}></i>
          <Link to={`edit/${workout._id}`}>
            <i className="fa fa-pencil color-font--primary font-size--large"></i>
          </Link>
        </nav>
      </div>
      
      {!isCollapsed && 
      <ul>
      {workout.lifts.map((lift, key) => (
        <Lift lift={lift} deleteLift={deleteLift} setWorkouts={setWorkouts} key={key} />
      ))}
        <li>
          <AddItem
            handleSubmit={addLift}
            placeholder="Add lift"
          />
        </li>
      </ul>
      }
    </section>
  )
}

export default Workout