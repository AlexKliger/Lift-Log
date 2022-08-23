import { set } from 'mongoose'
import Workout from './Workout'

const Log = ({workouts, deleteWorkout, updateWorkout, updateLift, dropdown, setDropdown}) => {

  return(
    <main className="l-centered">
      {!workouts
      ?
      'Loading...'
      :
      workouts.map((workout, key) => (
        <Workout
          workout={workout}
          deleteWorkout={deleteWorkout}
          updateWorkout={updateWorkout}
          updateLift={updateLift}
          dropdown={dropdown}
          setDropdown={setDropdown}
          key={key}
        />
      ))}
    </main>
  )
}

export default Log