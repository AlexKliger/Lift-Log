import { useState } from 'react'
import { POST } from '../util/fetch'

const Login = () => {
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')

    function handleChange(e) {
      if (e.target.id === 'username') setUser(e.target.value)
      if (e.target.id === 'password') setPass(e.target.value)
    }

    function onSubmit(e) {
      const config = {body: JSON.stringify({username: username, password: password})}
      POST('auth/login', config)
      e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
          <div>
            <label for="username">Username</label>
            <input
              onChange={handleChange}
              id="username"
              name="username"
              type="text"
              value={username}
              autocomplete="username"
              required />
          </div>
          <div>
            <label for="current-password">Password</label>
            <input
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              value={password}
              autocomplete="current-password"
              required />
          </div>
          <div>
            <button type="submit">Sign in</button>
          </div>
        </form>
    )
}

export default Login