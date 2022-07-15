import Lift from './Lift'
import AddLift from './AddLift'

const Workout = ({workout, requests}) => {
    return (
        <section className="workout">
          <h2 className="font-size--large">{workout.title}</h2>
          <i className="fa fa-trash" onClick={() => requests.deleteWorkout(workout._id)}></i>
          <ul>
            {workout.lifts.map((lift, index) => (
              <li>
                  <i className="fa fa-trash" onClick={() => requests.deleteLiftFromWorkout(workout._id, lift._id)}></i>
                  <Lift lift={lift} updateLift={requests.updateLift} />
              </li>
              ))}
            <li>
                <AddLift workoutId={workout._id} handleSubmit={requests.addLiftToWorkout} />
            </li>
          </ul>
        </section>
    )
}

export default Workout