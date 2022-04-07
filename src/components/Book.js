import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const Book = ({ pk, token }) => {
  const [book, setBook] = useState(null)
  const params = useParams()
  const bookId = params.bookId || pk
  useEffect(() => {
    axios
      .get(`https://drf-library-api.herokuapp.com/api/books/${bookId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setBook(res.data)
      })
  }, [bookId, token])

  return (
    <>
      {book && (
        <>
          <div className="book" id={pk}>
            <Link to={`${bookId}`}>
              <p>{book.title}</p>
            </Link>
            <p>{book.author}</p>
            <p>{book.publication_year}</p>
          </div>
        </>
      )}
    </>
  )
}
