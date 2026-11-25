import { useParams, Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import packages from '../data/packages'
const fallbackImage = '/images/destinations/kerala-backwaters.jpg'

function PackageDetails() {
  // Get the package ID from the URL
  const { id } = useParams()

  // Find the matching package from our dataset
  const travelPackage = packages.find((item) => item.id === id)

  // Handle invalid package IDs
  if (!travelPackage) {
    return (
      <div className="min-h-screen bg-[#e2ddc6]">
        <Navbar />

        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <div className="mb-5 text-5xl">🌍</div>

          <h1 className="text-3xl font-bold text-[#18352b]">
            Destination not found
          </h1>

          <p className="mt-3 max-w-md text-[#68756d]">
            Sorry, we couldn't find the travel package you're looking for.
            It may have been removed or the link may be incorrect.
          </p>

          <Link
            to="/"
            className="mt-7 rounded-full bg-[#29322f] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b0e10e]"
          >
            Explore destinations
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f7f2]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Back Navigation */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-sm text-[#839331] transition hover:text-[#18352b]"
        >
          ← Back to destinations
        </button>

        <div className="space-y-10">

        {/* Destination Hero */}
<section className="relative overflow-hidden rounded-3xl">

  {/* Destination Image */}
  <img
    src={travelPackage.image}
    alt={travelPackage.name}
    onError={(event) => {
      event.currentTarget.onerror = null
      event.currentTarget.src = fallbackImage
    }}
    className="absolute inset-0 h-full w-full object-cover"
  />

 {/* Dark Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

{/* Hero Content */}
<div className="relative flex min-h-[480px] flex-col justify-end p-8 sm:p-12 lg:p-16">

    {/* Category */}
    <span className="mb-4 w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-white backdrop-blur-md">
      {travelPackage.category} Experience
    </span>

    {/* Package Name */}
    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
      {travelPackage.name}
    </h1>

    {/* Destination */}
    <p className="mt-4 flex items-center gap-2 text-base text-white/85 sm:text-lg">
      <span>📍</span>
      {travelPackage.destination}
    </p>

    {/* Package Information */}
    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white">

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-[#715226]">★</span>
        <span className="font-semibold">{travelPackage.rating}</span>
        <span className="text-white/75">
          ({travelPackage.reviews} reviews)
        </span>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-2">
        <span>◷</span>
        <span>{travelPackage.duration} Days</span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2">
        <span>₹</span>
        <span className="font-semibold">
          {travelPackage.price.toLocaleString('en-IN')}
        </span>
        <span className="text-white/65">/ person</span>
      </div>

    </div>

  </div>
</section>

          {/* Destination Overview */}
<section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">

  {/* Description */}
  <div className="rounded-3xl border border-[#e8e6df] bg-white p-8 sm:p-10">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#c17b45]">
      Discover the destination
    </p>

    <h2 className="text-3xl font-semibold tracking-tight text-[#18352b]">
      About this journey
    </h2>

    <p className="mt-6 text-base leading-8 text-[#68756d]">
      {travelPackage.description}
    </p>

    <div className="mt-8 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eeede6] text-[#18352b]">
        ✦
      </span>

      <p className="text-sm font-medium text-[#18352b]">
        A journey worth remembering
      </p>
    </div>
  </div>

  {/* Destination Information */}
  <div className="rounded-3xl bg-[#18352b] p-8 text-white sm:p-10">
    <p className="text-xs font-semibold uppercase tracking-[3px] text-[#e5c69b]">
      Journey at a glance
    </p>

    <h3 className="mt-3 text-2xl font-semibold">
      Your travel details
    </h3>

    <div className="mt-8 space-y-6">

      {/* Category */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <span className="text-sm text-white/60">Experience</span>
        <span className="text-sm font-medium">{travelPackage.category}</span>
      </div>

      {/* Duration */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <span className="text-sm text-white/60">Duration</span>
        <span className="text-sm font-medium">
          {travelPackage.duration} Days
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <span className="text-sm text-white/60">Guest Rating</span>
        <span className="text-sm font-medium">
          ★ {travelPackage.rating} / 5
        </span>
      </div>

      {/* Reviews */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/60">Traveller Reviews</span>
        <span className="text-sm font-medium">
          {travelPackage.reviews.toLocaleString('en-IN')}
        </span>
      </div>

    </div>
  </div>

</section>

          {/* Trip Highlights */}
<section>
  {/* Section Heading */}
  <div className="mb-6">
    <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#c17b45]">
      The experience
    </p>

    <h2 className="text-3xl font-semibold tracking-tight text-[#18352b]">
      Trip Highlights
    </h2>

    <p className="mt-3 text-sm leading-6 text-[#68756d]">
      Discover the experiences that make this journey unforgettable.
    </p>
  </div>

  {/* Highlights Grid */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {travelPackage.highlights.map((highlight, index) => {
      const icons = ['✦', '◇', '✧', '❋']

      return (
        <div
          key={`${highlight}-${index}`}
          className="group rounded-2xl border border-[#e8e6df] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eeede6] text-xl text-[#18352b] transition group-hover:bg-[#18352b] group-hover:text-white">
            {icons[index % icons.length]}
          </div>

          <h3 className="mt-5 text-base font-semibold text-[#18352b]">
            {highlight}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#858c85]">
            Experience something special during your journey.
          </p>
        </div>
      )
    })}
  </div>
</section>
    {/* Day-by-Day Itinerary */}
<section>
  {/* Section Heading */}
  <div className="mb-8">
    <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#c17b45]">
      Journey roadmap
    </p>

    <h2 className="text-3xl font-semibold tracking-tight text-[#18352b]">
      Your Itinerary
    </h2>

    <p className="mt-3 text-sm leading-6 text-[#68756d]">
      Every day brings a new experience, a new destination, and a new memory.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative space-y-5">
    {travelPackage.itinerary.map((item, index) => (
      <div
        key={index}
        className="relative grid grid-cols-1 gap-5 sm:grid-cols-[100px_1fr]"
      >
        {/* Day Indicator */}
        <div className="flex items-start sm:justify-center">
          <span className="inline-flex rounded-full bg-[#18352b] px-5 py-2 text-sm font-medium text-white">
            Day {item.day}
          </span>
        </div>

        {/* Itinerary Card */}
        <div className="rounded-2xl border border-[#e8e6df] bg-white p-6 transition duration-300 hover:shadow-md sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-[#18352b]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#68756d]">
            {item.description}
          </p>

          {/* Day Footer */}
          <div className="mt-6 flex items-center gap-2 border-t border-[#e8e6df] pt-4 text-xs font-medium text-[#c17b45]">
            <span>✦</span>
            <span>DAY {item.day} EXPERIENCE</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    {/* Inclusions & Exclusions */}
<section className="grid grid-cols-1 gap-6 md:grid-cols-2">

  {/* What's Included */}
  <div className="rounded-3xl border border-[#e8e6df] bg-white p-8 sm:p-10">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#63836e]">
      Your package
    </p>

    <h2 className="text-2xl font-semibold tracking-tight text-[#18352b]">
      What's Included
    </h2>

    <p className="mt-3 text-sm leading-6 text-[#68756d]">
      Everything arranged to make your journey comfortable.
    </p>

    <ul className="mt-8 space-y-4">
      {travelPackage.inclusions.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f0e9] text-sm text-[#426c4d]">
            ✓
          </span>

          <span className="text-sm leading-6 text-[#526057]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>

  {/* What's Excluded */}
  <div className="rounded-3xl border border-[#e8e6df] bg-white p-8 sm:p-10">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#c17b45]">
      Before you travel
    </p>

    <h2 className="text-2xl font-semibold tracking-tight text-[#18352b]">
      What's Excluded
    </h2>

    <p className="mt-3 text-sm leading-6 text-[#68756d]">
      A few expenses to keep in mind while planning your trip.
    </p>

    <ul className="mt-8 space-y-4">
      {travelPackage.exclusions.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5e9e3] text-sm text-[#b76c4a]">
            ×
          </span>

          <span className="text-sm leading-6 text-[#526057]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>

</section>
      {/* Booking Call to Action */}
<section className="relative overflow-hidden rounded-3xl bg-[#18352b] p-8 sm:p-12">

  {/* Decorative Element */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />

  <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

    {/* CTA Content */}
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#e5c69b]">
        Your next adventure awaits
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Ready to experience {travelPackage.destination}?
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
        Start planning your journey today. Explore the details, choose your travel date,
        and get ready for an unforgettable experience.
      </p>
    </div>

    {/* Price & Booking Button */}
    <div className="shrink-0 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <p className="text-sm text-white/60">
        Starting from
      </p>

      <p className="mt-2 text-3xl font-semibold text-white">
        ₹{travelPackage.price.toLocaleString('en-IN')}
      </p>

      <p className="mt-1 text-xs text-white/50">
        per person · {travelPackage.duration} days
      </p>

      <Link
        to={`/book/${travelPackage.id}`}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#e5c69b] px-6 py-3 text-sm font-semibold text-[#18352b] transition hover:bg-[#f0d7b2]"
      >
        Book this trip
        <span>→</span>
      </Link>
    </div>

  </div>
</section>

        </div>
      </main>
    </div>
  )
}

export default PackageDetails
