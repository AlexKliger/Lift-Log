import { useCallback, useState } from 'react'

const Stepper = ({handleChange, stepSize}) => {
  const [number, setNumber] = useState(0)

  const onChange = useCallback((e) => {
    setNumber(e.target.value)
  }, [])

  const stepUp = useCallback(() => {
    setNumber(number + stepSize)
    handleChange(number)
  }, [number, stepSize])

  const stepDown = useCallback(() => {
    if (number > 0) {
      setNumber(number - stepSize) 
      handleChange(number)
    }
  }, [number, stepSize])

  return (
    <div className="stepper">
      <label htmlFor="number"></label>
      <input
        className="stepper__input"
        type="number"
        value={number}
        onChange={onChange}>
      </input>
      <i className="fa fa-angle-up font-size--header" onClick={stepUp}></i>
      <i className="fa fa-angle-down font-size--header" onClick={stepDown}></i>
    </div>
  )
}

export default Stepper