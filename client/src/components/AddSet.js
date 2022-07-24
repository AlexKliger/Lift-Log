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
      <form style={{"display": "flex", "justifyContent": "space-between", "align-items": "center"}} onSubmit={onSubmit}>
        <input type="submit" value="+"></input>

        <div className="stepper stepper--weight">
          <label for="weight">Weight</label>
          <input className="stepper__input" type="number" value={weight} placeholder="weight" onChange={handleChange}></input>
          <i className="fa fa-angle-up font-size--header" onClick={stepUp}></i>
          <i className="fa fa-angle-down font-size--header" onClick={stepDown}></i>
        </div>

        <div className="stepper stepper--reps">
          <label for="reps">Reps</label>
          <input className="stepper__input" type="number" id='reps' value={reps} placeholder="reps" onChange={handleChange}></input>
          <i className="fa fa-angle-up font-size--header" onClick={stepUp}></i>
          <i className="fa fa-angle-down font-size--header" onClick={stepDown}></i>
        </div>
      </form>
  )
}

export default AddSet