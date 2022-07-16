import {useState} from 'react'

const AddSet = ({id, handleSubmit}) => {
    const [weight, setWeight] = useState(0)
    const [reps, setReps] = useState(0)

    function handleChange(e) {
        if (e.target.id === 'weight') setWeight(e.target.value)
        if(e.target.id === 'reps') setReps(e.target.value)
    }

    function onSubmit(e) {
        handleSubmit(weight, reps)
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="number" id='weight' value={weight} placeholder="weight" onChange={handleChange}></input>
            <input type="number" id='reps' value={reps} placeholder="reps" onChange={handleChange}></input>
            <input type="submit" value="+"></input>
        </form>
    )
}

export default AddSet