import { useCallback} from "react"
import Checkbox from "./Checkbox"

const Dropdown = ({ visible, user, logout, theme, setTheme }) => {
  return (
    <div className={`dropdown bg-color--primary box-shadow ${visible ? "": "dropdown--hidden"}`}>
      <h3 className="font-size--large">User: {user ? user.username : 'none'}</h3>
      <Checkbox
        handleChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark' ? true : false}
        label="Dark mode"
      />
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