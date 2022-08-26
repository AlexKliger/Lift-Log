import { Link } from 'react-router-dom'
import Checkbox from './Checkbox'
import { logout } from '../util/api'

async function handleLogoutClick(setWorkouts, setUser) {
  setWorkouts(await logout)
  setUser(null)
}

const DropdownContent = ({user, theme, setTheme, setWorkouts, setUser}) => (
  <nav>
    <h3 className="font-size--large">Hi, {user ? user.username : 'none'}!</h3>
    <Checkbox
      handleChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      checked={theme === 'dark' ? true : false}
      label="Dark mode"
    />
    <ul className="font-size--large">
      <li>Settings</li>
      <li onClick={() => handleLogoutClick(setWorkouts, setUser)}><a>Logout</a></li>
    </ul>
  </nav>
)

const Header = ({ user, dropdown, setWorkouts, setUser, setDropdown, theme, setTheme }) => {
  return (
    <>
    <header className="header color-bg--secondary">
      <h1 className="header__title font-size--header">{user ? user.username : "Lifter"}'s Log</h1>

      <nav>
        <Link to="/edit/new">
          <i className="fa fa-plus color-font--primary font-size--large"></i>
        </Link>
        <i onClick={() => setDropdown({...dropdown, visible: !dropdown.visible, content: <DropdownContent user={user} logout={logout} theme={theme} setTheme={setTheme} setWorkouts={setWorkouts} setUser={setUser} />})} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
      </nav>
    </header>

    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}

export default Header