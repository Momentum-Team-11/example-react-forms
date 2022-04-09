import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

export default function Login({ setAuth, isLoggedIn }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    // prevent the default action of the form, which is to make a request
    event.preventDefault()
    // clear errors since we could be re-submitting form data
    setError('')
    // Make an ajax request to the backend's URL for login
    // Use the username and password from state to send in the request body
    axios
      .post('https://drf-library-api.herokuapp.com/auth/token/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data)
        setAuth(username, res.data.auth_token)
      })
      .catch((e) => setError(e.message))
  }

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div className="Login">
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin} className="section">
        <div className="field">
          <label className="label" htmlFor="username">
            Username
          </label>
          <div className="control has-icons-left">
            <input
              type="text"
              id="username"
              className="input is-medium"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control has-icons-left">
            <input
              type="password"
              id="password"
              className="input is-medium"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
