import { useState } from 'react'
import { InputField, RefInput } from './components/Forms'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'

import Login from './components/Login'
import { BookList } from './components/BookList'
import { Book } from './components/Book'

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
    <Router>
      <Routes>
        <Route path="/" element={<BookList token={token} />} />
        <Route path="books" element={<BookList token={token} />}></Route>
        <Route path="books/:bookId" element={<Book token={token} />}></Route>
        <Route
          path="/login"
          element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </Router>
  )
}

export default App
