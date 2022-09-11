 const Stepper = ({onChange, value, stepSize, min, label}) => {
  return (
    <div className="stepper">
      <label className="font-size--extra-small" htmlFor="number">
        <input
          className="stepper__input"
          type="number"
          value={value}
          onChange={e => onChange(e.target.value)}>
        </input>
        {label || ""}
      </label>
      <div>
        <i
          className="fa fa-toggle-up color-font--primary font-size--header"
          onClick={() => onChange(value + stepSize)}
        >
        </i>
        <i
          style={{"display": "block"}}
          className="fa fa-toggle-down color-font--primary font-size--header"
          onClick={() => onChange(value - stepSize > min ? value - stepSize : min)}
        >
        </i>
      </div>
    </div>
  )
}

export default Stepper