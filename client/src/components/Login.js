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
      <form className="form" onSubmit={handleSubmit}>
        <span>{displayMessage}</span>
        <h2 className="font-size--large"> Login</h2>
        <div>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            value={credentials.username}
            autoComplete="username"
            required />
          <label htmlFor="username"> Username</label>
        </div>

        <div>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            value={credentials.password}
            autoComplete="current-password"
            required />
          <label htmlFor="current-password"> Password</label>
        </div>

        <div>
          <button className="button--form color-font--primary font-size--large" type="submit">Login</button>
        </div>
      </form>
  )
}

export default Login