const Dropdown = ({ visible, user, logout }) => {
  return (
    <div className={`dropdown bg-color--primary box-shadow ${visible ? "": "dropdown--hidden"}`}>
      <h3 className="font-size--large">User: {user ? user.username : 'none'}</h3>
      <nav>
        <ul>
          <li>Settings</li>
          <li onClick={logout}><a>Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Dropdown