import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../util/api'
import { ThemeContext } from '../context/ThemeContext'
import MainNav from './MainNav'

const Header = ({setWorkouts, setUser, user, setDropdown, dropdown }) => {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <>
    <header className="header color-bg--secondary">
      <h1 className="header__title font-size--header">{user ? user.username : "Lifter"}'s Log</h1>

      <div>
        <Link to="/edit/new">
          {user && <i className="fa fa-plus color-font--primary font-size--large"></i>}
        </Link>
        <i onClick={() => setDropdown({...dropdown, visible: !dropdown.visible, content: <MainNav user={user} logout={logout} theme={theme} setTheme={setTheme} setWorkouts={setWorkouts} setUser={setUser} />})} className="dropdown-toggle fa fa-ellipsis-v font-size--large"></i>
      </div>
    </header>

    <div style={{"height": "100px"}}>

    </div>
    </>
  )
}

export default Header