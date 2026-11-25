import { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'

function BookingConfirmation() {
  const [booking] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lastBooking'))
    } catch {
      return null
    }
  })

  // Handle missing booking
  if (!booking) {
    return (
      <div className="min-h-screen bg-[#f8f7f2]">
        <Navbar />

        <main className="flex min-h-[75vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e9eee8] text-4xl">
            🌍
          </div>

          <h1 className="text-3xl font-semibold text-[#18352b]">
            No booking found
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#68756d]">
            We couldn't find a booking confirmation. Explore our destinations
            and plan your next adventure.
          </p>

          <Link
            to="/"
            className="mt-8 rounded-full bg-[#18352b] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#294b3c]"
          >
            Explore destinations
          </Link>
        </main>
      </div>
    )
  }

  // Format travel date
  const formattedDate = new Date(
    `${booking.travelDate}T00:00:00`
  ).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen bg-[#f8f7f2]">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-12">

        {/* Success Header */}
        <section className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e3eee5] text-4xl">
            ✓
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#c17b45]">
            Booking successful
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#18352b] sm:text-5xl">
            Your adventure awaits!
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#68756d]">
            Your booking details have been saved successfully.
            Get ready to explore somewhere extraordinary.
          </p>
        </section>

        {/* Booking Reference */}
        <section className="mb-8 rounded-3xl bg-[#18352b] p-8 text-white sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[3px] text-white/60">
            Booking reference
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-wide sm:text-3xl">
            {booking.bookingId}
          </h2>

          <p className="mt-3 text-sm text-white/60">
            Keep this reference for your booking details.
          </p>
        </section>

        {/* Booking Details */}
        <section className="overflow-hidden rounded-3xl border border-[#e8e6df] bg-white">

          <div className="border-b border-[#e8e6df] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#c17b45]">
              Your trip
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#18352b] sm:text-3xl">
              {booking.packageName}
            </h2>

            <p className="mt-2 text-[#68756d]">
              📍 {booking.destination}
            </p>
          </div>

          {/* Trip Information */}
          <div className="grid grid-cols-1 gap-6 p-7 sm:grid-cols-3 sm:p-9">

            <div>
              <p className="text-sm text-[#858c85]">Travel date</p>
              <p className="mt-2 font-semibold text-[#18352b]">
                {formattedDate}
              </p>
            </div>

            <div>
              <p className="text-sm text-[#858c85]">Travellers</p>
              <p className="mt-2 font-semibold text-[#18352b]">
                {booking.travellers} {booking.travellers === 1 ? 'Traveller' : 'Travellers'}
              </p>
            </div>

            <div>
              <p className="text-sm text-[#858c85]">Duration</p>
              <p className="mt-2 font-semibold text-[#18352b]">
                {booking.duration} Days
              </p>
            </div>

          </div>

          {/* Price Breakdown */}
          <div className="border-t border-[#e8e6df] p-7 sm:p-9">

            <h3 className="mb-6 text-xl font-semibold text-[#18352b]">
              Payment summary
            </h3>

            <div className="space-y-4">

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-[#68756d]">
                  Price per person
                </span>

                <span className="font-medium text-[#18352b]">
                  ₹{booking.pricePerPerson.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-[#68756d]">
                  Subtotal ({booking.travellers} travellers)
                </span>

                <span className="font-medium text-[#18352b]">
                  ₹{booking.subtotal.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-[#68756d]">
                  GST (5%)
                </span>

                <span className="font-medium text-[#18352b]">
                  ₹{booking.gst.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

            </div>

            {/* Total */}
            <div className="mt-7 rounded-2xl bg-[#18352b] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-white/70">
                  Total payable
                </span>

                <span className="text-2xl font-semibold sm:text-3xl">
                  ₹{booking.total.toLocaleString('en-IN', {
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

        {/* Footer Actions */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-[#18352b] px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#294b3c]"
          >
            Explore more destinations
          </Link>

          <Link
            to="/saved"
            className="rounded-full border border-[#d9ddd5] bg-white px-8 py-4 text-center text-sm font-semibold text-[#18352b] transition hover:bg-[#eeede6]"
          >
            View saved trips
          </Link>
        </div>

        {/* Demo Notice */}
        <p className="mt-8 text-center text-xs leading-6 text-[#858c85]">
          This is a demonstration booking confirmation. No actual payment
          has been processed.
        </p>

      </main>
    </div>
  )
}

export default BookingConfirmation