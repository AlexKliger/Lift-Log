import Workout from './Workout'

const Log = ({workouts, requests}) => {
    return(
        <main className="l-centered">
            {!workouts
            ?
            'Loading...'
            :
            workouts.map((workout, index) => (
                <Workout workout={workout} requests={requests} />
            ))}
        </main>
    )
}

export default Log