function Hero({ children }) {
  return (
    <section className="landing-hero">
      <img
        className="hero-backdrop"
        src="/images/hero-hiker-wide.jpg"
        alt="A hiker watching the first sunlight fall across a mountain valley"
      />
      <div className="hero-shade" />

      <div className="hero-copy">
        <p className="hero-kicker"><span /> Explore the world</p>
        <h1>Discover<br />Extraordinary<br /><em>Journeys</em></h1>
        <p className="hero-description">
          Unforgettable experiences. Breathtaking destinations.<br />
          Your next adventure awaits.
        </p>
        <div className="hero-actions">
          <a href="#destinations" className="hero-primary-action">
            <span aria-hidden="true">◉</span> Explore Destinations <span aria-hidden="true">→</span>
          </a>
          <a href="#about" className="hero-secondary-action">
            <span aria-hidden="true">▶</span> Our way of travel
          </a>
        </div>
      </div>

      <div className="hero-mantra" aria-hidden="true">
        <span>Travel More</span>
        <span>Live Better</span>
        <i />
      </div>

      <div className="hero-search-slot">{children}</div>
      <span className="hero-photo-caption">First light on the trail · Start your next story</span>
    </section>
  )
}

export default Hero
