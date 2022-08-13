import Workout from './Workout'
import AddWorkout from './AddWorkout'

const Log = ({workouts, createWorkout, deleteWorkout, updateWorkout, updateLift}) => {

    return(
        <main className="l-centered">
            <AddWorkout handleSubmit={createWorkout} />
            {!workouts
            ?
            'Loading...'
            :
            workouts.map((workout, index) => (
                <Workout workout={workout} deleteWorkout={deleteWorkout} updateWorkout={updateWorkout} updateLift={updateLift} />
            ))}
        </main>
    )
}

export default Log