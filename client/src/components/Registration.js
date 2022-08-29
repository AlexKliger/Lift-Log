import { useCallback, useState } from "react"
import { uid } from 'uid'
import { getUser, login, register } from "../util/api"

const Registration = ({ setWorkouts, setUser }) => {
  const [credentials, setCredentials] = useState({username: "", password: "", confirmation: ""})
  const [displayMessage, setDisplayMessage] = useState("")

  const handleChange = useCallback((e) => {
    const newCreds = {...credentials}
    newCreds[e.target.name] = e.target.value
    setCredentials(newCreds)
  })

  const attemptRegistering = useCallback(async (username, password) => {
    const registrationStatus = await register(username, password)
    if (registrationStatus.success) {
      setWorkouts(await login(username, password))
      setUser(await getUser())
    }
    setDisplayMessage(registrationStatus.message)
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    await attemptRegistering(credentials.username, credentials.password)
  }, [credentials])

  const handleGuestClick = useCallback(async () => {
    const guestId = uid()
    await attemptRegistering(`guest${guestId}`, 'guest')
  }, [])

  return (
    <form className="form form--registration" onSubmit={handleSubmit}>
      <h2 className="font-size--large">Register</h2>
      <span>{displayMessage}</span>

      <div>
        <input
          type="text"
          value={credentials.username}
          name="username"
          onChange={handleChange}
        ></input>
        <label htmlFor="username">Username</label>
      </div>

      <div>
        <input
          type="password"
          value={credentials.password}
          name="password"
          onChange={handleChange}
        ></input>
        <label htmlFor="password">Password</label>
      </div>

      <div>
        <input
          type="text"
          value={credentials.confirmation}
          name="confirmation"
          onChange={handleChange}
        ></input>
        <label htmlFor="confirm">Confirm password</label>
      </div>
      
      <input type="submit" value="Register"></input>

      <span onClick={handleGuestClick}>Continue as Guest</span>
    </form>
  )
}

export default Registration