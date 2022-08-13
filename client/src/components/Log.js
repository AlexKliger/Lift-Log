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
            workouts.map((workout, key) => (
                <Workout workout={workout} deleteWorkout={deleteWorkout} updateWorkout={updateWorkout} updateLift={updateLift} key={key} />
            ))}
        </main>
    )
}

export default Log