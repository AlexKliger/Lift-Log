import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Lift from './Lift'
import AddItem from './AddItem'

const Workout = ({workout, deleteWorkout, updateWorkout, updateLift}) => {
  const addLift = useCallback((name) => {
    updateWorkout(workout._id, {lifts: [...workout.lifts, {name: name, sets: []}]})
  }, [workout])

  const deleteLift = useCallback((liftId) => {
    updateWorkout(workout._id, {lifts: [...workout.lifts.filter(lift => lift._id !== liftId)]})
  }, [workout])


  return (
    <section className="workout">
      <div className="workout__header">
        <h2 className="workout__title font-size--large">{workout.title}</h2>
        <i className="fa fa-trash" onClick={() => deleteWorkout(workout._id)}></i>
        <Link to={`edit/${workout._id}`}>
          <i className="fa fa-pencil"></i>
        </Link>
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