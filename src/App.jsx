import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import PackageDetails from './pages/PackageDetails'
import Booking from './pages/Booking'
import SavedTrips from './pages/SavedTrips'
import BookingConfirmation from './pages/BookingConfirmation'
import NotFound from './pages/NotFound'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/package/:id" element={<PackageDetails />} />

      <Route path="/book/:id" element={<Booking />} />

      <Route path="/saved" element={<SavedTrips />} />

      <Route
        path="/booking-confirmation"
        element={<BookingConfirmation />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
