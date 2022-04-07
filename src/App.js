import { useState } from 'react'
import { InputField, RefInput } from './components/Forms'
import useLocalStorageState from 'use-local-storage-state'
import Login from './components/Login'
const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('reactDemoToken', '')
  const [username, setUsername] = useLocalStorageState('reactDemoUsername', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = username && token

  return (
    <>
      <h1>Smol Forms</h1>
      <InputField isLoggedIn={isLoggedIn} token={token} />
      <RefInput isLoggedIn={isLoggedIn} token={token} />
      {!isLoggedIn && <Login setAuth={setAuth} />}
    </>
  )
}

export default App
