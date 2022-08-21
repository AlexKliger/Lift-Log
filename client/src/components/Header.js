import { Link } from 'react-router-dom'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown.js'

const Header = ({ user, logout, dropdownVisible, setDropdownVisible, theme, setTheme }) => {
  return (
    <>
    <header className="header color-bg--secondary">
      <h1 className="header__title font-size--header">Lifter's Log</h1>

      <Dropdown
        visible={dropdownVisible}
        setTheme={setTheme}
      >
        <h3 className="font-size--large">Hi, {user ? user.username : 'none'}!</h3>
        <Checkbox
          handleChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark' ? true : false}
          label="Dark mode"
        />
        <nav>
          <ul className="font-size--large">
            <li>Settings</li>
            <li onClick={logout}><a>Logout</a></li>
          </ul>
        </nav>
      </Dropdown>

      <nav>
        <Link to="/edit/new">
          <i className="fa fa-plus color-font--primary font-size--large"></i>
        </Link>
        <i onClick={() => {setDropdownVisible(!dropdownVisible)}} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
      </nav>
    </header>

    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}

export default Header