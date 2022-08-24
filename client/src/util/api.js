import { GET, POST, PUT, DELETE } from './fetch'

export const getWorkouts = async (callback) => {
    callback(await GET('/workouts'))
}

export const createWorkout = async (body, callback) => {
    const config = {body: JSON.stringify(body)}
    callback(await POST('/workouts', config))
}

export const updateWorkout = async (workoutId, body, callback) => {
    const config = {body: JSON.stringify(body)}
    callback(await PUT(`/workouts/${workoutId}`, config))
}

export const deleteWorkout = async (workoutId, callback) => {
    callback(await DELETE(`/workouts/${workoutId}`))
}

export const updateLift = async (liftId, body, callback) => {
    const config = {body: JSON.stringify(body)}
    callback(await PUT(`/workouts/updateLift/${liftId}`, config))
}