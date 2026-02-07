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
<img width="1882" height="868" alt="Screenshot 2026-02-06 221957" src="https://github.com/user-attachments/assets/87e9845d-483e-4a44-b72d-aac5bb144241" />
<img width="1892" height="871" alt="Screenshot 2026-02-06 222013" src="https://github.com/user-attachments/assets/06ff19f0-953b-48f6-ac2d-b5da47b8a917" />
<img width="1892" height="866" alt="Screenshot 2026-02-06 222028" src="https://github.com/user-attachments/assets/4d6bc856-9ee1-4f74-aa3f-3a3f0855b32c" />
<img width="1891" height="873" alt="Screenshot 2026-02-06 222040" src="https://github.com/user-attachments/assets/355856f5-6240-4aa6-b14d-0524d4ea83b1" />
<img width="1890" height="872" alt="Screenshot 2026-02-06 222054" src="https://github.com/user-attachments/assets/937c8b74-947e-45c3-994b-462377121baa" />
<img width="1890" height="867" alt="Screenshot 2026-02-06 222109" src="https://github.com/user-attachments/assets/c19e7cad-992f-4487-8be0-005b25a89501" />
<img width="1897" height="872" alt="Screenshot 2026-02-06 222122" src="https://github.com/user-attachments/assets/993f9009-d269-4ba1-9483-ee64bab0e0f8" />
<img width="1883" height="869" alt="Screenshot 2026-02-06 222137" src="https://github.com/user-attachments/assets/e2a191aa-6eca-4693-b289-658a6ce1a475" />
<img width="1893" height="868" alt="Screenshot 2026-02-06 222146" src="https://github.com/user-attachments/assets/1e88f07b-89b7-43f3-a69d-7ac7f9c77f44" />
<img width="1891" height="873" alt="Screenshot 2026-02-07 091736" src="https://github.com/user-attachments/assets/08e06736-1881-4eaf-9fb3-648ccac80fe1" />
<img width="1883" height="868" alt="Screenshot 2026-02-07 091752" src="https://github.com/user-attachments/assets/956bd747-8fe0-4b41-9b36-5f883904eb60" />
<img width="1886" height="870" alt="Screenshot 2026-02-07 091807" src="https://github.com/user-attachments/assets/6bb54f49-1efd-409b-8b33-1960de89b320" />
<img width="1891" height="862" alt="Screenshot 2026-02-07 091828" src="https://github.com/user-attachments/assets/7e782118-9720-4d41-9afe-212d8110bed6" />
<img width="1885" height="867" alt="Screenshot 2026-02-07 091842" src="https://github.com/user-attachments/assets/cf3305ca-10c2-4b9a-bb27-4c3cfe4b4a49" />
<img width="1887" height="873" alt="Screenshot 2026-02-07 091857" src="https://github.com/user-attachments/assets/ffadbec5-fa70-4d9f-b04d-ec19aa413df6" />
<img width="1896" height="871" alt="Screenshot 2026-02-07 091910" src="https://github.com/user-attachments/assets/b5837f5b-31ba-4628-8a92-10d30da9e3a5" />
<img width="1899" height="875" alt="Screenshot 2026-02-07 091926" src="https://github.com/user-attachments/assets/ae098f88-ac67-4c8a-8572-0cd9f21a253c" />
<img width="1894" height="867" alt="Screenshot 2026-02-07 091937" src="https://github.com/user-attachments/assets/b0c19cd2-8990-4fe8-b328-e7f51e9c4114" />
<img width="1891" height="884" alt="Screenshot 2026-02-07 091951" src="https://github.com/user-attachments/assets/13bfcb7b-00d0-48b0-abc0-62f25a8c5404" />
<img width="1888" height="871" alt="Screenshot 2026-02-07 092006" src="https://github.com/user-attachments/assets/ccea5b60-7301-4e97-a9f0-3126de718280" />
<img width="1888" height="875" alt="Screenshot 2026-02-07 092025" src="https://github.com/user-attachments/assets/635ae434-03d8-4128-984d-f8f1a0185cf3" />


