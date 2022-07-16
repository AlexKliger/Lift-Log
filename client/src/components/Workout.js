import Lift from './Lift'
import AddLift from './AddLift'

const Workout = ({workout, requests}) => {
    return (
        <section className="workout">
          <h2 className="workout__name font-size--large">{workout.title}</h2>
          <i className="fa fa-trash" onClick={() => requests.deleteWorkout(workout._id)}></i>
          <ul className="workout__list">
            {workout.lifts.map((lift, index) => (
              <li>
                  <Lift lift={lift} updateLift={requests.updateLift} />
                  <i className="fa fa-trash" onClick={() => requests.deleteLiftFromWorkout(workout._id, lift._id)}></i>
              </li>
              ))}
          </ul>
          <AddLift workoutId={workout._id} handleSubmit={requests.addLiftToWorkout} />
        </section>
    )
}

export default Workout