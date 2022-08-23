import { Link } from 'react-router-dom'
import Checkbox from './Checkbox'

const DropdownContent = ({user, logout, theme, setTheme}) => (
  <nav>
    <h3 className="font-size--large">Hi, {user ? user.username : 'none'}!</h3>
    <Checkbox
      handleChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      checked={theme === 'dark' ? true : false}
      label="Dark mode"
    />
    <ul className="font-size--large">
      <li>Settings</li>
      <li onClick={logout}><a>Logout</a></li>
    </ul>
  </nav>
)

const Header = ({ user, logout, dropdown, setDropdown, theme, setTheme }) => {
  return (
    <>
    <header className="header color-bg--secondary">
      <h1 className="header__title font-size--header">Lifter's Log</h1>

      <nav>
        <Link to="/edit/new">
          <i className="fa fa-plus color-font--primary font-size--large"></i>
        </Link>
        <i onClick={() => setDropdown({...dropdown, visible: !dropdown.visible, content: <DropdownContent user={user} logout={logout} theme={theme} setTheme={setTheme} />})} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
      </nav>
    </header>

    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}

export default Header