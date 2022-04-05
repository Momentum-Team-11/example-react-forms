import { useState } from 'react'
import { requestLogin } from '../ajax-requests'
import '../App.css'
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [token, setToken] = useState('')

  const handleLogin = (event) => {
    // prevent the default action of the form, which is to make a request
    event.preventDefault()
    // clear errors since we could be re-submitting form data
    setError('')
    // Make an ajax request to the backend's URL for login
    // Use the username and password from state to send in the request body
    // for now use the fake endpoint until we have a real one from the backend
    requestLogin(username, password)
      .then((res) => setToken(res.auth_token))
      .catch((e) => setError(e.message))
    // somehow indicate in our application that we are logged in
    //for now we put the token in state in this component
    // but it can't stay here because it needs to be shared across the whole app
  }

  return (
    <div className="Login">
      <h2>Log In</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="field-controls">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="field-controls">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  )
}
