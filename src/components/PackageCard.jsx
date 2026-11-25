import { Link } from 'react-router-dom'

const fallbackImage = '/images/destinations/kerala-backwaters.jpg'

function PackageCard({ travelPackage, isSaved, onToggleSave }) {
  return (
    <article className="trip-card">
      <div className="trip-image-wrap">
        <img
          src={travelPackage.image}
          alt={travelPackage.name}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackImage
          }}
          className="trip-image"
          loading="lazy"
        />
        <div className="trip-image-shade" />
        <span className="trip-category">{travelPackage.category}</span>
        <button
          type="button"
          onClick={() => onToggleSave(travelPackage.id)}
          aria-label={isSaved ? 'Remove from saved trips' : 'Save trip'}
          className={`save-button${isSaved ? ' is-saved' : ''}`}
        >
          {isSaved ? '\u2665' : '\u2661'}
        </button>
        <div className="trip-overlay-copy">
          <h3>{travelPackage.name}</h3>
          <p className="trip-location"><span aria-hidden="true">●</span> {travelPackage.destination}</p>
          <p className="trip-rating"><span>★</span> {travelPackage.rating} <small>({travelPackage.reviews} reviews)</small></p>
        </div>
      </div>
      <div className="trip-footer">
        <span className="trip-duration"><span aria-hidden="true">▦</span> {travelPackage.duration} days</span>
        <span className="trip-price"><strong>₹{travelPackage.price.toLocaleString('en-IN')}</strong> <small>per person</small></span>
        <Link to={`/package/${travelPackage.id}`} className="details-link" aria-label={`Explore ${travelPackage.name} details`}>
          Let’s go <span aria-hidden="true">{`\u2192`}</span>
        </Link>
      </div>
    </article>
  )
}

export default PackageCard
