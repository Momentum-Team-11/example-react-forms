import axios from 'axios'
import { useState, useEffect } from 'react'
import { BookCard } from './BookCard'
export const BookList = ({ token }) => {
  const [books, setBooks] = useState([])
  const [bookTitles, setBookTitles] = useState([])

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
      })
  }, [token])

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
