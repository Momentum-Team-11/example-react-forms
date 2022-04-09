import { useEffect, useState } from 'react'
import { InputField, RefInput } from './components/Forms'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import NavBar from './components/NavBar'
import Login from './components/Login'
import { BookList } from './components/BookList'
import { BookDetail } from './components/BookDetail'
import Register from './components/Register'
import axios from 'axios'
const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('reactDemoToken', '')
  const [username, setUsername] = useLocalStorageState('reactDemoUsername', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    axios
      .post(
        'https://drf-library-api.herokuapp.com/auth/token/logout',
        {},
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then((res) => {
        setAuth(null, null)
      })
  }

  const isLoggedIn = username && token

  return (
    <>
      <Router>
        <header className="header container">
          <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </header>
        <Routes>
          <Route path="/" element={<BookList token={token} />} />
          <Route path="books" element={<BookList token={token} />} />
          <Route path="books/:bookId" element={<BookDetail token={token} />} />
          <Route
            path="/login"
            element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/register"
            element={<Register isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
