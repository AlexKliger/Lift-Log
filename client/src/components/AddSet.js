import {useCallback, useState} from 'react'

const AddSet = ({handleSubmit}) => {
  const [weight, setWeight] = useState(0)
  const [reps, setReps] = useState(0)

  const handleChange = useCallback((e) => {
    if (e.target.parentNode.classList.contains('stepper--weight')) setWeight(e.target.value)
    if (e.target.parentNode.classList.contains('stepper--reps')) setReps(e.target.value)
  })

  const stepUp = useCallback((e) => {
    if (e.target.parentNode.classList.contains('stepper--weight')) setWeight(weight + 1)
    if (e.target.parentNode.classList.contains('stepper--reps')) setReps(reps + 1)
  })

  const stepDown = useCallback((e) => {
    if (e.target.parentNode.classList.contains('stepper--weight')) setWeight(weight - 1)
    if (e.target.parentNode.classList.contains('stepper--reps')) setReps(reps - 1)
  })
  
  const onSubmit = useCallback((e) => {
    handleSubmit(weight, reps)
    e.preventDefault()
  })

  return (
      <form className="add-set" onSubmit={onSubmit}>
        <input type="submit" value="+"></input>

        <div className="stepper stepper--weight">
          <label htmlFor="weight">W</label>
          <input className="stepper__input" type="number" value={weight} onChange={handleChange}></input>
          <i className="fa fa-angle-up font-size--header" onClick={stepUp}></i>
          <i className="fa fa-angle-down font-size--header" onClick={stepDown}></i>
        </div>

        <div className="stepper stepper--reps">
          <label htmlFor="reps">R</label>
          <input className="stepper__input" type="number" id='reps' value={reps} onChange={handleChange}></input>
          <i className="fa fa-angle-up font-size--header" onClick={stepUp}></i>
          <i className="fa fa-angle-down font-size--header" onClick={stepDown}></i>
        </div>
      </form>
  )
}

export default AddSet