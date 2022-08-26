import Workout from './Workout'

const Log = ({workouts, setWorkouts, dropdown, setDropdown}) => {

  return(
    <main className="l-centered">
      {!workouts
      ?
      'Loading...'
      :
      !workouts.map ? null : workouts.map((workout, key) => (
        <Workout
          workout={workout}
          setWorkouts={setWorkouts}
          dropdown={dropdown}
          setDropdown={setDropdown}
          key={key}
        />
      ))}
    </main>
  )
}

export default Log