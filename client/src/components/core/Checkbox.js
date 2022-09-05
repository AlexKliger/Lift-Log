const Checkbox = ({handleChange, checked, label, styling}) => {
  return (
    <label className="font-size--large">
      {label || ""}
      <input
        onChange={handleChange}
        type="checkbox"
        checked = {checked}
      >
      </input>
    </label>
  )
}

export default Checkbox