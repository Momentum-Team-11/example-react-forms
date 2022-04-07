import { Link } from 'react-router-dom'

export const BookCard = ({ title, bookId, featured }) => {
  return (
    <div className="book card" id={bookId}>
      <div class="card-content">
        <div class="content">
          <Link to={`books/${bookId}`}>
            <p>
              {title}{' '}
              {featured && (
                <span className="icon">
                  <i class="fa-solid fa-feather-pointed"></i>
                </span>
              )}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
