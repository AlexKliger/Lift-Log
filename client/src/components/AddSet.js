import { useCallback, useState } from "react"
import Stepper from "./Stepper"

const AddSet = ({ handleSubmit }) => {
  const [weight, setWeight] = useState(0)
  const [reps, setReps] = useState(0)
  
  const onSubmit = useCallback((e) => {
    handleSubmit(weight, reps)
    e.preventDefault()
  })

  return (
    <form className="add-set" onSubmit={onSubmit}>
      <button className="btn-add" type="submit" value="+">
        <i className="fa fa-plus color-font--primary font-size--large"></i>
      </button>

      <Stepper
        value={weight}
        onChange={setWeight}
        stepSize={5}
      />

      <Stepper
        value={reps}
        onChange={setReps}
        stepSize={1}
      />
  
    </form>
  )
}

export default AddSet