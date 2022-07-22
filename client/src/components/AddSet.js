import {useState} from 'react'

const AddSet = ({handleSubmit}) => {
  const [weight, setWeight] = useState(0)
  const [reps, setReps] = useState(0)

  function handleChange(e) {
    if (e.target.parentNode.classList.contains('stepper--weight')) setWeight(e.target.value)
    if(e.target.parentNode.classList.contains('stepper--reps')) setReps(e.target.value)
  }

  function stepUp(e) {
    if (e.target.parentNode.classList.contains('stepper--weight')) setWeight(weight + 1)
    if(e.target.parentNode.classList.contains('stepper--reps')) setReps(reps + 1)
  }
  
  function stepDown(e) {
    if (e.target.parentNode.classList.contains('stepper--weight')) setWeight(weight - 1)
    if(e.target.parentNode.classList.contains('stepper--reps')) setReps(reps - 1)
  }

  function onSubmit(e) {
    handleSubmit(weight, reps)
    e.preventDefault()
  }

  return (
      <form onSubmit={onSubmit}>
        <div className="stepper stepper--weight">
          <input type="number" value={weight} placeholder="weight" onChange={handleChange}></input>
          <i className="fa fa-plus" onClick={stepUp}></i>
          <i className="fa fa-minus" onClick={stepDown}></i>
        </div>

        <div className="stepper stepper--reps">
          <input type="number" id='reps' value={reps} placeholder="reps" onChange={handleChange}></input>
          <i className="fa fa-plus" onClick={stepUp}></i>
          <i className="fa fa-minus" onClick={stepDown}></i>
        </div>

        <input type="submit" value="+"></input>
      </form>
  )
}

export default AddSet