import {useState} from 'react'

const AddWorkout = ({handleSubmit}) => {
    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        handleSubmit(text)
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} placeholder="Add workout" onChange={handleChange}></input>
            <input type="submit" value="+"></input>
        </form>
    )
}

export default AddWorkout