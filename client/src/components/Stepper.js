import { useCallback } from 'react'

const Stepper = ({onChange, value, stepSize}) => {
  const handleChange = useCallback((e) => {
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
      <div>
        <i
          className="fa fa-toggle-up color-font--primary font-size--header"
          onClick={() => onChange(value + stepSize)}
        >
        </i>
        <i
          style={{"display": "block"}}
          className="fa fa-toggle-down color-font--primary font-size--header"
          onClick={() => onChange(value - stepSize)}
        >
        </i>
      </div>
    </div>
  )
}

export default Stepper