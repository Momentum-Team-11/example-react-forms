import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BookCard } from './BookCard'
export const BookList = ({ token }) => {
  const [books, setBooks] = useState([])
  const [bookTitles, setBookTitles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://drf-library-api.herokuapp.com/api/books', {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((res) => {
        const bookTitles = res.data.map((obj) => obj.title)
        setBookTitles(bookTitles)
        setBooks(res.data)
        setIsLoading(false)
      })
  }, [token])

  if (!token) {
    return <Navigate to="/login" />
  }

  if (isLoading) {
    return <Skeleton count={10} height="50px" width="90%" />
  }

  return (
    <div className="book-list container-box">
      {books.map((book) => (
        <BookCard
          key={book.pk}
          title={book.title}
          bookId={book.pk}
          featured={book.featured}
        />
      ))}
    </div>
  )
}
