import Workout from './Workout'
import AddItem from './AddItem'

const Log = ({workouts, createWorkout, deleteWorkout, updateWorkout, updateLift}) => {

  return(
    <main className="l-centered">
      <AddItem
        handleSubmit={createWorkout}
        placeholder="Add workout"
        styling="add-workout"
      />
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