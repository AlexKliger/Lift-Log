import Checkbox from './Checkbox'
import { logout } from '../util/api'
import { useCallback } from 'react'

const MainNav = ({user, theme, setTheme, setWorkouts, setUser}) => {
  const handleLogoutClick = useCallback(async () => {
    setWorkouts(await logout)
    setUser(null)
  })

  return (
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
  }
  
export default MainNav