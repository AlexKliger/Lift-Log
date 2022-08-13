import { useCallback, useState } from 'react'
import Lift from './Lift'
import AddLift from './AddLift'

const Workout = ({workout, deleteWorkout, updateWorkout, updateLift}) => {
  const addLift = useCallback((name) => {
    updateWorkout(workout._id, {lifts: [...workout.lifts, {name: name, sets: []}]})
  }, [])

  const deleteLift = useCallback((liftId) => {
    updateWorkout(workout._id, {lifts: [...workout.lifts.filter(lift => lift._id !== liftId)]})
  }, [])


  return (
    <section className="workout">
      <h2 className="workout__title font-size--large">{workout.title}</h2>
      <i className="fa fa-trash" onClick={() => deleteWorkout(workout._id)}></i>
      <ul className="workout__list">
      {workout.lifts.map((lift, key) => (
        <Lift lift={lift} deleteLift={deleteLift} updateLift={updateLift} key={key} />
      ))}
      </ul>
      <AddLift handleSubmit={addLift} />
    </section>
  )
}

export default Workout