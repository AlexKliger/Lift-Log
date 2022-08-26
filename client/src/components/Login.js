import { useCallback, useState } from 'react'
import { getUser, login } from '../util/api'

const Login = ({ setWorkouts, setUser, user }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = useCallback((e) => {
    if (e.target.id === 'username') setUsername(e.target.value)
    if (e.target.id === 'password') setPassword(e.target.value)
  })

  const onSubmit = useCallback(async (e) => {
    e.preventDefault()
    setWorkouts(await login(username, password))
    setUser(await getUser())
  })

  return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            id="username"
            name="username"
            type="text"
            value={username}
            autoComplete="username"
            required />
        </div>
        <div>
          <label htmlFor="current-password">Password</label>
          <input
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            value={password}
            autoComplete="current-password"
            required />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
  )
}

export default Login