import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ExploreControls from '../components/ExploreControls'
import PackageCard from '../components/PackageCard'

import packages from '../data/packages'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOption, setSortOption] = useState('recommended')

  const [savedTrips, setSavedTrips] = useState(() => {
    const storedTrips = localStorage.getItem('savedTrips')

    return storedTrips ? JSON.parse(storedTrips) : []
  })

  // Persist saved trips whenever the saved list changes
  useEffect(() => {
    localStorage.setItem('savedTrips', JSON.stringify(savedTrips))
  }, [savedTrips])

  // Save or remove a package
  const handleToggleSave = (packageId) => {
    setSavedTrips((previousTrips) =>
      previousTrips.includes(packageId)
        ? previousTrips.filter((id) => id !== packageId)
        : [...previousTrips, packageId],
    )
  }

  // Search and filter packages
  const filteredPackages = packages.filter((travelPackage) => {
    const search = searchTerm.toLowerCase().trim()

    const matchesSearch =
      travelPackage.name.toLowerCase().includes(search) ||
      travelPackage.destination.toLowerCase().includes(search) ||
      travelPackage.category.toLowerCase().includes(search)

    const matchesCategory =
      selectedCategory === 'All' ||
      travelPackage.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price

      case 'price-high':
        return b.price - a.price

      case 'rating':
        return b.rating - a.rating

      default:
        return 0
    }
  })

  const featuredOrder = ['meghalaya-explorer', 'kerala-backwaters', 'manali-adventure']
  const displayedPackages = sortOption === 'recommended'
    ? [
        ...featuredOrder.map((id) => sortedPackages.find((item) => item.id === id)).filter(Boolean),
        ...sortedPackages.filter((item) => !featuredOrder.includes(item.id)),
      ]
    : sortedPackages

  return (
    <div className="site-shell home-page">
      <Navbar />

      <main>
        <Hero>
          <ExploreControls
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </Hero>

        <section id="destinations" className="collection-section reference-collection">
          <div className="featured-layout">
            <div className="featured-intro">
              <p className="featured-eyebrow"><span /> Popular destinations</p>
              <h2>Featured<br /><em>Adventures</em></h2>
              <p>Handpicked experiences for every kind of traveller.</p>
              <a className="view-all-link" href="#all-destinations">View all destinations <span>→</span></a>
            </div>

            {displayedPackages.length > 0 ? (
              <div className="trip-grid featured-cards">
                {displayedPackages.slice(0, 3).map((travelPackage) => (
                  <PackageCard
                    key={travelPackage.id}
                    travelPackage={travelPackage}
                    isSaved={savedTrips.includes(travelPackage.id)}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-globe" aria-hidden="true">◎</div>
                <h3>No destinations found</h3>
                <p>Try a different search or category.</p>
                <button type="button" className="button button-dark" onClick={() => { setSearchTerm(''); setSelectedCategory('All') }}>
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {displayedPackages.length > 3 && (
            <div id="all-destinations" className="more-destinations">
              <div className="more-destinations-heading">
                <div><p className="featured-eyebrow"><span /> Find your next escape</p><h2>More places to <em>fall for.</em></h2></div>
                <span>{String(displayedPackages.length - 3).padStart(2, '0')} journeys</span>
              </div>
              <div className="trip-grid more-cards">
                {displayedPackages.slice(3).map((travelPackage) => (
                <PackageCard
                  key={travelPackage.id}
                  travelPackage={travelPackage}
                  isSaved={savedTrips.includes(travelPackage.id)}
                  onToggleSave={handleToggleSave}
                />
              ))}
              </div>
            </div>
          )}
        </section>

        {/* About Section */}
        <section
          id="about"
          className="about-section"
        >
          <div className="about-inner">
            <p className="eyebrow">The Aaroha promise</p>
            <h2>
              Travel more. <em>Live better.</em>
            </h2>

            <p>
              Thoughtful escapes, remarkable places, and the small details that
              make every journey feel like your own.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
