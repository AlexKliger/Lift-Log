import { useCallback, useState } from "react"
import { getUser, login } from "../util/api"

const Login = ({ setWorkouts, setUser }) => {
  const [credentials, setCredentials] = useState({username: "", password: ""})
  const [displayMessage, setDisplayMessage] = useState("")

  const handleChange = useCallback((e) => {
    const newCreds = {...credentials}
    newCreds[e.target.name] = e.target.value
    setCredentials(newCreds)
  })

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const data = await login(credentials.username, credentials.password)
    data.message && setDisplayMessage(data.message)
    setWorkouts(data)
    setUser(await getUser())
  })

  return (
      <form onSubmit={handleSubmit}>
        <span>{displayMessage}</span>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            value={credentials.username}
            autoComplete="username"
            required />
        </div>
        <div>
          <label htmlFor="current-password">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={credentials.password}
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