const Dropdown = ({ visible, children, position }) => {
  return (
    <div style={position} className={`dropdown color-bg--primary box-shadow ${visible ? "": "dropdown--hidden"}`}>
      {children}
    </div>
  )
}

export default Dropdown