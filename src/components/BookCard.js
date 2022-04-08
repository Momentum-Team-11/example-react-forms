import { Link } from 'react-router-dom'

export const BookCard = ({ title, bookId, featured }) => {
  return (
    <div className="book card" id={bookId}>
      <div className="card-content">
        <div className="content">
          <Link to={`books/${bookId}`}>
            <p>
              {title}{' '}
              {featured && (
                <span className="icon">
                  <i className="fa-solid fa-feather-pointed"></i>
                </span>
              )}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
