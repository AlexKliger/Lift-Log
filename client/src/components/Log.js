import Workout from './Workout'

const Log = ({workouts, deleteWorkout, updateWorkout, updateLift}) => {

  return(
    <main className="l-centered">
      {!workouts
      ?
      'Loading...'
      :
      workouts.reverse().map((workout, key) => (
        <Workout
          workout={workout}
          deleteWorkout={deleteWorkout}
          updateWorkout={updateWorkout}
          updateLift={updateLift}
          key={key}
        />
      ))}
    </main>
  )
}

export default Log