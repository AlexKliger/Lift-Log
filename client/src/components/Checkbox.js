const Checkbox = ({handleChange, checked, label}) => {
  return (
    <label>
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