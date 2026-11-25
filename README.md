# 🌍 Travel & Tourism Explorer

A modern, responsive travel exploration platform designed to help users discover destinations, explore travel packages, save their favorite trips, and experience a simplified booking process.

🔗 **Live Demo:** https://travel-tourism-explorer-9c5l.vercel.app

---

## 📌 About the Project

Travel & Tourism Explorer is a web-based travel discovery platform built with React. It provides an interactive interface where users can browse travel destinations, explore detailed packages, save trips for later, and complete a simulated booking process.

The project focuses on delivering a clean user experience, responsive design, dynamic content rendering, and client-side functionality.

---

## ✨ Features

- 🏝️ **Destination Exploration** — Discover travel destinations and vacation packages.
- 🔍 **Search & Filtering** — Search destinations and filter packages based on available categories and preferences.
- 📦 **Dynamic Package Details** — View detailed information about individual travel packages.
- ❤️ **Saved Trips** — Save favorite packages and access them later.
- 🗑️ **Trip Management** — Remove saved destinations whenever needed.
- 🗓️ **Booking System** — Select travel dates and number of travellers.
- 💰 **Dynamic Pricing** — Automatically calculate package cost, GST, and total amount.
- 🧾 **Booking Confirmation** — Display booking details and confirmation information.
- 💾 **Local Storage** — Persist saved trips and booking information in the browser.
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile screens.
- ⚠️ **Custom Error Handling** — Handle invalid destinations and unavailable package information.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive design |
| React Router DOM | Client-side navigation |
| Local Storage | Client-side data persistence |
| Git & GitHub | Version control |
| Vercel | Deployment and hosting |

---

## 📂 Project Structure

```text
travel-tourism-explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │
│   ├── data/
│   │   └── packages.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PackageDetails.jsx
│   │   ├── Booking.jsx
│   │   ├── SavedTrips.jsx
│   │   └── BookingConfirmation.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/SidharthS1122/travel-tourism-explorer.git
```

### 2. Navigate to the Project Directory

```bash
cd travel-tourism-explorer
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

```text
http://localhost:5173
```

---

## 🧭 Application Routes

| Route | Description |
|---|---|
| `/` | Explore destinations and travel packages |
| `/package/:id` | View individual package details |
| `/book/:id` | Book a selected travel package |
| `/saved` | View and manage saved trips |
| `/booking-confirmation` | View booking confirmation details |
| `*` | Not Found page |

---

## 💰 Booking & Pricing

The booking module provides a simulated booking experience with dynamic calculations based on the selected package and number of travellers.

### Pricing Calculation

- **Subtotal:** Package price × Number of travellers
- **GST:** 5% of subtotal
- **Total:** Subtotal + GST

The application validates the selected travel date and traveller count before proceeding to the confirmation page.

> Note: This is a frontend demonstration project. It does not process real bookings, payments, or reservations.

---

## 💾 Data Persistence

The application uses browser **Local Storage** to maintain user interactions across sessions.

Stored information includes:

- Saved travel packages
- Booking information
- Last booking details used for the confirmation page

No external database is required.

---

## 🎯 Project Objectives

- Build a responsive travel exploration interface.
- Implement reusable React components.
- Manage dynamic routes and application state.
- Create interactive search and filtering functionality.
- Implement client-side data persistence.
- Develop a simulated booking workflow.
- Deploy a frontend application to a public hosting platform.

---

## 🌐 Deployment

The application is deployed using **Vercel**.

🔗 **Live Application:** https://travel-tourism-explorer-9c5l.vercel.app

---

## 🔮 Future Improvements

- Integration with real travel and destination APIs.
- User authentication and personalized profiles.
- Backend booking management.
- Database integration.
- Real-time hotel and flight information.
- AI-powered destination recommendations.
- Weather-based travel suggestions.
- Interactive maps and itinerary planning.
- Secure payment gateway integration.

---

## 👨‍💻 Developer

**Sidharth S**

MCA Student | Aspiring Full Stack Developer

- GitHub: [SidharthS1122](https://github.com/SidharthS1122)

---

## 📄 License

This project was developed as an academic and portfolio project for learning, development, and demonstration purposes.