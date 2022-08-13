import { useState, useEffect, useCallback } from 'react'
import Workout from './Workout'
import AddWorkout from './AddWorkout'
import { GET, DELETE, POST, PUT } from '../util/fetch'

const Log = () => {
    const [workouts, setWorkouts] = useState([])
    useEffect(() => {
        async function getWorkouts() {
            setWorkouts(await GET('/workouts'))
        }

        getWorkouts()
    }, [])

    const createWorkout = useCallback(async (title) => {
        const config = {body: JSON.stringify({title: title})}
        setWorkouts(await POST(`/workouts`, config))
    }, [])

    const deleteWorkout = useCallback(async (workoutId) => {
        setWorkouts(await DELETE(`/workouts/${workoutId}`))
    }, [])

    const updateWorkout = useCallback(async (workoutId, body) => {
        const config = {body: JSON.stringify(body)}
        setWorkouts(await PUT(`/workouts/${workoutId}`, config))
    }, [])

    const updateLift = useCallback(async (liftId, body) => {
        const config = {body: JSON.stringify(body)}
        setWorkouts(await PUT(`/workouts/updateLift/${liftId}`, config))
    }, [])

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