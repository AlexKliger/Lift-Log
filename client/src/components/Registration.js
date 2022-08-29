import { useCallback, useState } from "react"
import { getUser, login, register } from "../util/api"

const Registration = ({ setWorkouts, setUser }) => {
  const [credentials, setCredentials] = useState({username: "", password: "", confirmation: ""})
  const [displayMessage, setDisplayMessage] = useState("")

  const handleChange = useCallback((e) => {
    const newCreds = {...credentials}
    newCreds[e.target.name] = e.target.value
    setCredentials(newCreds)
  })

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const registrationStatus = await register(credentials.username, credentials.password)
    if (registrationStatus.success) {
      setWorkouts(await login(credentials.username, credentials.password))
      setUser(await getUser())
    }
    setDisplayMessage(registrationStatus.message)
  })

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-size--large">Register</h2>
      <span>{displayMessage}</span>

      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={credentials.username}
          name="username"
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={credentials.password}
          name="password"
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label htmlFor="confirm">Confirm password</label>
        <input
          type="text"
          value={credentials.confirmation}
          name="confirmation"
          onChange={handleChange}
        ></input>
      </div>
      
      <input type="submit" value="Register"></input>
    </form>
  )
}

export default Registration