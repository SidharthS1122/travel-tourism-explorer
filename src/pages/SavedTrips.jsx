import { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import PackageCard from '../components/PackageCard'
import packages from '../data/packages'

function SavedTrips() {
  // Retrieve saved package IDs from localStorage
  const [savedIds, setSavedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('savedTrips')) || []
    } catch {
      return []
    }
  })

  // Find the actual packages using their saved IDs
  const savedPackages = packages.filter((travelPackage) =>
    savedIds.includes(travelPackage.id)
  )

  // Remove a destination from saved trips
  const handleRemoveSaved = (id) => {
const updatedIds = savedIds.filter((savedId) => savedId !== id)

    setSavedIds(updatedIds)

    localStorage.setItem('savedTrips', JSON.stringify(updatedIds))
  }

  return (
    <div className="min-h-screen bg-[#f8f7f2]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">

        {/* Page Header */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#c17b45]">
            Your travel collection
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#18352b] sm:text-5xl">
            Saved Trips
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#68756d]">
            Keep track of the destinations you love and plan your next
            adventure whenever you're ready.
          </p>
        </div>

        {/* Saved Package Count */}
        {savedPackages.length > 0 && (
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-[#68756d]">
              {savedPackages.length} saved{' '}
              {savedPackages.length === 1 ? 'destination' : 'destinations'}
            </p>
          </div>
        )}

        {/* Saved Destinations */}
        {savedPackages.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedPackages.map((travelPackage) => (
              <PackageCard
                key={travelPackage.id}
                travelPackage={travelPackage}
                isSaved={true}
                onToggleSave={() => handleRemoveSaved(travelPackage.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center rounded-3xl border border-[#e8e6df] bg-white px-6 py-20 text-center">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#eeede6] text-3xl">
              ♡
            </div>

            <h2 className="text-2xl font-semibold text-[#18352b]">
              No saved trips yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#68756d]">
              Your favourite destinations will appear here.
              Explore our collection and save the places you dream of visiting.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18352b] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#294b3c]"
            >
              Explore destinations
              <span>→</span>
            </Link>
          </div>
        )}

      </main>
    </div>
  )
}

export default SavedTrips