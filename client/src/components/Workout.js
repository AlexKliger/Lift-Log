import Lift from './Lift'
import AddLift from './AddLift'

const Workout = ({workout, deleteWorkout, addLiftToWorkout}) => {
    return (
        <section>
            <h2>{workout.title}</h2>
            <i className="fa fa-trash" onClick={() => deleteWorkout(workout._id)}></i>
            <ul>
                {workout.lifts.map((lift, index) => (
                        <Lift lift={lift} />
                    ))}
                <li>
                    <AddLift workoutId={workout._id} handleSubmit={addLiftToWorkout} />
                </li>
            </ul>
        </section>
    )
}

export default Workout