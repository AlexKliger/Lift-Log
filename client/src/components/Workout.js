import { useCallback } from 'react'
import Lift from './Lift'
import AddLift from './AddLift'

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
      </div>
      <ul>
      {workout.lifts.map((lift, key) => (
        <Lift lift={lift} deleteLift={deleteLift} updateLift={updateLift} key={key} />
      ))}
        <li>
          <AddLift handleSubmit={addLift} />
        </li>
      </ul>
    </section>
  )
}

export default Workout