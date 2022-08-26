import { GET, POST, PUT, DELETE } from './fetch'

export const getWorkouts = async () => {
    return await GET('/workouts')
    
}

export const createWorkout = async (body) => {
    const config = {body: JSON.stringify(body)}
    return await POST('/workouts', config)
}

export const updateWorkout = async (workoutId, body) => {
    const config = {body: JSON.stringify(body)}
    return await PUT(`/workouts/${workoutId}`, config)
}

export const deleteWorkout = async (workoutId) => {
    return await DELETE(`/workouts/${workoutId}`)
}

export const updateLift = async (liftId, body) => {
    const config = {body: JSON.stringify(body)}
    return await PUT(`/workouts/updateLift/${liftId}`, config)
}