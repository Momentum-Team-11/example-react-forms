import { Navigate } from 'react-router-dom'

const Register = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/" />
  }
  return <h1> This is a registration form </h1>
}

export default Register
