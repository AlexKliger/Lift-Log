import { useState } from 'react'

const Login = ({ handleSubmit }) => {
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')

    function handleChange(e) {
      if (e.target.id === 'username') setUser(e.target.value)
      if (e.target.id === 'password') setPass(e.target.value)
    }

    function onSubmit(e) {
      handleSubmit(username, password)
      e.preventDefault()
    }

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