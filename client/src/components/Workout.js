import Lift from './Lift'
import AddLift from './AddLift'

const Workout = ({workout, requests}) => {
  async function addLift(name) {
    requests.updateWorkout(workout._id, {lifts: [...workout.lifts, {name: name, sets: []}]})
  }

  async function deleteLift(liftId) {
    requests.updateWorkout(workout._id, {lifts: [...workout.lifts.filter(lift => lift._id !== liftId)]})
  }

  return (
    <section className="workout">
      <h2 className="workout__name font-size--large">{workout.title}</h2>
      <i className="fa fa-trash" onClick={() => requests.deleteWorkout(workout._id)}></i>
      <ul className="workout__list">
      {workout.lifts.map((lift, index) => (
        <li className="lift">
          <Lift lift={lift} updateLift={requests.updateLift} />
          <i className="fa fa-trash" onClick={() => deleteLift(lift._id)}></i>
        </li>
      ))}
      </ul>
      <AddLift handleSubmit={addLift} />
    </section>
  )
}

export default Workout