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
      <div className="add-set__steppers">
      <Stepper
        value={weight}
        onChange={setWeight}
        stepSize={5}
        label={" lbs."}
      />

      <Stepper
        value={reps}
        onChange={setReps}
        stepSize={1}
        label={" reps"}
      />
      </div>

      <button type="submit" value="+">
        <i className="fa fa-plus color-font--primary font-size--large"></i>
      </button>
  
    </form>
  )
}

export default AddSet