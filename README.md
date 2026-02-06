🌱 Dr.Maya Reynolds

A modern, responsive, and visually engaging therapy website built with React (Vite), Tailwind CSS, and shadcn/ui. Includes pages for home, about, my office, contact, and bookings. The contact and bookings forms are powered by Web3Forms.

Features

✅ Responsive Design: Mobile-first layout with Tailwind CSS.

✅ Shadcn UI Components: Prebuilt, reusable UI components for a polished look.

✅ Video & Image Galleries: Hero video section, office gallery, and image-based sections.

✅ React Router: Client-side routing for smooth navigation.

✅ React Query: Handles any asynchronous data fetching (future-proof for APIs/bookings).

✅ Web3Forms Integration: Contact and booking forms with email notifications.

✅ Animations: Subtle fade-in and hover animations for interactive experience.

✅ SEO-Friendly & Accessible: Semantic HTML and ARIA roles included.

Project Structure
Grow_Therapy/
├─ public/                   # Public assets
├─ src/
│  ├─ assets/                # Images & videos
│  ├─ components/            # Reusable UI components
│  ├─ hooks/                 # Custom hooks (e.g., toast)
│  ├─ pages/                 # Pages (Home, About, MyOffice, Contact, Bookings)
│  ├─ App.jsx                # Main React app with routes
│  └─ main.jsx               # Entry point
├─ package.json
├─ tailwind.config.js
└─ vite.config.js

Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/Grow_Therapy.git
cd Grow_Therapy


Install dependencies:

npm install
# or
yarn install


Start the development server:

npm run dev
# or
yarn dev


Your site will be live at http://localhost:5173 (Vite default).

Environment Variables

For Web3Forms integration:

Create a .env file at the project root.

Add your Web3Forms API key:

VITE_WEB3FORMS_API_KEY=your_web3forms_api_key_here


Use this key in your contact and bookings form fetch requests.

Deployment

You can deploy this project easily on Netlify, Vercel, or any static hosting service:

For Netlify:

Push your repo to GitHub.

Connect your repository to Netlify.

Set the build command:

npm run build


Set the publish directory:

dist

Usage

Home Page: Hero section, introduction, call-to-action buttons.

About Page: Information about the therapist and approach.

My Office: Video tour and office gallery.

Contact Page: Contact form powered by Web3Forms.

Bookings Page: Booking form for scheduling therapy sessions.

Tech Stack

React + Vite

Tailwind CSS + shadcn/ui

React Router DOM

React Query (@tanstack/react-query)

Web3Forms (contact and bookings forms)

JavaScript / JSX

Contributing

Fork the repository.

Create a feature branch: git checkout -b feature-name

Commit your changes: git commit -m "Add feature"

Push to branch: git push origin feature-name

Create a Pull Request.

License

This project is MIT Licensed.
