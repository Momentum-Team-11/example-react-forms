import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const BookDetail = ({ token }) => {
  const [book, setBook] = useState(null)
  const params = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/books/${params.bookId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setBook(res.data)
      })
  }, [params.bookId, token])

  return (
    <>
      <Link to="/">Back to all books 📚</Link>
      {book && (
        <>
          <div className="book content container-box" id={book.pk}>
            <h2>{book.title}</h2>
            <div className="details">
              <p>{book.author}</p>
              <p>{book.publication_year}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
