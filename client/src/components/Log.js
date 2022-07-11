import Workout from './Workout'
import AddWorkout from './AddWorkout'

const Log = ({workouts, createWorkout, deleteWorkout, addLiftToWorkout}) => {
    return(
        <div>
            <h1>Lift log</h1>

            <AddWorkout handleSubmit={createWorkout} />

            {!workouts
            ?
            'Loading...'
            :
            workouts.map((workout, index) => (
                <Workout workout={workout} deleteWorkout={deleteWorkout} addLiftToWorkout={addLiftToWorkout} />
            ))}
        </div>
    )
}

export default Log