import { useCallback } from 'react'

const Stepper = ({onChange, value, stepSize}) => {
  const handleChange = useCallback((e) => {
    console.log("Stepper -> handleChange(e:", e, ")")
    onChange(e.target.value)
  })

  return (
    <div className="stepper">
      <label htmlFor="number"></label>
      <input
        className="stepper__input"
        type="number"
        value={value}
        onChange={handleChange}>
      </input>
      <i
        className="fa fa-angle-up font-size--header"
        onClick={() => onChange(value + stepSize)}>
      </i>
      <i
        className="fa fa-angle-down font-size--header"
        onClick={() => onChange(value - stepSize)}>
      </i>
    </div>
  )
}

export default Stepper