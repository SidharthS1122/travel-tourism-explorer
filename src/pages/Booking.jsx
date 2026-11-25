import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import packages from '../data/packages'

function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find the selected travel package
  const travelPackage = packages.find((item) => item.id === id)

  // Booking form state
  const [travelDate, setTravelDate] = useState('')
  const [travellers, setTravellers] = useState(1)
  const [error, setError] = useState('')

  // Price calculations
  const subtotal = travelPackage ? travelPackage.price * travellers : 0
  const gst = subtotal * 0.05
  const total = subtotal + gst

  // Get today's date in YYYY-MM-DD format
  const today = new Date()
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  
  // Handle booking submission
const handleBookingSubmit = () => {
  if (!travelDate) {
    setError('Please select your travel date.')
    return
  }

  if (travelDate < todayString) {
    setError('Please select a valid travel date.')
    return
  }

  setError('')

  // Generate a unique booking ID
  const bookingId = `TW-${Date.now()}`

  // Create booking object
  const booking = {
    bookingId,
    packageId: travelPackage.id,
    packageName: travelPackage.name,
    destination: travelPackage.destination,
    travelDate,
    travellers,
    pricePerPerson: travelPackage.price,
    subtotal,
    gst,
    total,
    duration: travelPackage.duration,
    createdAt: new Date().toISOString(),
  }

  // Save booking to localStorage
  localStorage.setItem('lastBooking', JSON.stringify(booking))

  // Navigate to booking confirmation
  navigate('/booking-confirmation')
}

  // Handle invalid package
  if (!travelPackage) {
    return (
      <div className="min-h-screen bg-[#f8f7f2]">
        <Navbar />

        <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-5 text-5xl">🌍</div>

          <h1 className="text-3xl font-bold text-[#18352b]">
            Package not found
          </h1>

          <p className="mt-3 max-w-md text-[#68756d]">
            We couldn't find the package you're trying to book.
          </p>

          <Link
            to="/"
            className="mt-7 rounded-full bg-[#18352b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#294b3c]"
          >
            Explore destinations
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f7f2]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">

        {/* Page Header */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#c17b45]">
            Your next adventure
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#18352b] sm:text-5xl">
            Book your journey
          </h1>

          <p className="mt-4 text-base leading-7 text-[#68756d]">
            Complete your travel details and prepare for an unforgettable experience.
          </p>
        </div>

        {/* Booking Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">

          {/* Booking Form */}
          <section className="rounded-3xl border border-[#e8e6df] bg-white p-8 sm:p-10">

            <h2 className="text-2xl font-semibold text-[#18352b]">
              Traveller details
            </h2>

            <p className="mt-2 text-sm text-[#68756d]">
              Select your preferred date and number of travellers.
            </p>

            {/* Travel Date */}
            <div className="mt-8">
              <label
                htmlFor="travelDate"
                className="mb-2 block text-sm font-medium text-[#18352b]"
              >
                Travel date
              </label>

              <input
                id="travelDate"
                type="date"
                min={todayString}
                value={travelDate}
                onChange={(event) => {
                  setTravelDate(event.target.value)
                  setError('')
                }}
                className="w-full rounded-xl border border-[#e8e6df] px-4 py-3 text-sm text-[#18352b] outline-none transition focus:border-[#18352b]"
              />

              {/* Validation Error */}
              {error && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {error}
                </p>
              )}
            </div>

            {/* Traveller Counter */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-medium text-[#18352b]">
                Number of travellers
              </label>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-[#e8e6df]">
                <button
                  type="button"
                  onClick={() =>
                    setTravellers((current) => Math.max(1, current - 1))
                  }
                  className="h-12 w-12 bg-[#f8f7f2] text-lg transition hover:bg-[#eeede6]"
                >
                  −
                </button>

                <span className="flex h-12 w-16 items-center justify-center text-sm font-semibold text-[#18352b]">
                  {travellers}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setTravellers((current) => Math.min(10, current + 1))
                  }
                  className="h-12 w-12 bg-[#f8f7f2] text-lg transition hover:bg-[#eeede6]"
                >
                  +
                </button>
              </div>

              <p className="mt-2 text-xs text-[#858c85]">
                Minimum 1 · Maximum 10 travellers
              </p>
            </div>

            {/* Continue Booking Button */}
            <button
              type="button"
              onClick={handleBookingSubmit}
              className="mt-8 w-full rounded-full bg-[#18352b] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#294b3c]"
            >
              Confirm Booking
            </button>

          </section>

          {/* Package Summary */}
          <section className="h-fit overflow-hidden rounded-3xl border border-[#e8e6df] bg-white">

            {/* Package Image */}
            <div className="relative h-56">
              <img
                src={travelPackage.image}
                alt={travelPackage.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-medium uppercase tracking-[2px] text-white/75">
                  {travelPackage.destination}
                </p>

                <h2 className="mt-1 text-2xl font-semibold text-white">
                  {travelPackage.name}
                </h2>
              </div>
            </div>

            {/* Package Price Breakdown */}
            <div className="p-6">

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#e8e6df] pb-4">
                <span className="text-sm text-[#68756d]">Duration</span>

                <span className="text-sm font-medium text-[#18352b]">
                  {travelPackage.duration} Days
                </span>
              </div>

              {/* Price Per Person */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[#68756d]">
                  Price per person
                </span>

                <span className="text-sm font-medium text-[#18352b]">
                  ₹{travelPackage.price.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Traveller Count */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-[#68756d]">
                  Travellers
                </span>

                <span className="text-sm font-medium text-[#18352b]">
                  × {travellers}
                </span>
              </div>

              {/* Subtotal */}
              <div className="mt-6 border-t border-[#e8e6df] pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#68756d]">
                    Subtotal
                  </span>

                  <span className="font-medium text-[#18352b]">
                    ₹{subtotal.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                {/* GST */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-[#68756d]">
                    GST (5%)
                  </span>

                  <span className="text-sm text-[#18352b]">
                    ₹{gst.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="mt-6 rounded-2xl bg-[#18352b] p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-white/70">
                    Total payable
                  </span>

                  <span className="text-2xl font-semibold text-white">
                    ₹{total.toLocaleString('en-IN', {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <p className="mt-2 text-xs text-white/50">
                  Inclusive of 5% GST
                </p>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default Booking