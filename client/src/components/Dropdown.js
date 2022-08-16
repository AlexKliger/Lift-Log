const Dropdown = ({ visible, user, logout }) => {
  return (
    <div className={`dropdown ${visible ? "": "dropdown--hidden"}`}>
    <h3 className="font-size--large">User: {user ? user.username : 'none'}</h3>
    
    {user && <button onClick={logout}>Logout</button>}
  </div>
    )
}

export default Dropdown