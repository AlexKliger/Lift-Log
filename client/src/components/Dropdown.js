const Dropdown = ({ visible, user, logout, setTheme }) => {
  return (
    <div className={`dropdown bg-color--primary box-shadow ${visible ? "": "dropdown--hidden"}`}>
      <h3 className="font-size--large">User: {user ? user.username : 'none'}</h3>
      <label>
        Dark mode
        <input onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} type="checkbox"></input>
      </label>
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