const Dropdown = ({ visible, children }) => {
  return (
    <div className={`dropdown color-bg--primary box-shadow ${visible ? "": "dropdown--hidden"}`}>
      {children}
    </div>
  )
}

export default Dropdown