import axios from 'axios'
import { useState, useRef } from 'react'
import { BookCard } from './BookCard'

const Search = ({ token }) => {
  const searchTerm = useRef(null)
  const [searchResults, setSearchResults] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(
        `http://localhost:8000/api/search?title=${searchTerm.current.value}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => setSearchResults(res.data))
  }

  return (
    <>
      <form className="section" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="search">
            search
          </label>
          <div className="control has-icons-left">
            <input
              type="text"
              id="search"
              className="input is-medium"
              required
              name="search"
              ref={searchTerm}
            />
            <span className="icon is-small is-left">
              <i className="fa-solid fa-bird"></i>
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
      <div className="book-list container-box">
        {searchResults &&
          searchResults.map((book) => (
            <BookCard
              key={book.pk}
              title={book.title}
              bookId={book.pk}
              featured={book.featured}
            />
          ))}
      </div>
    </>
  )
}

export default Search
