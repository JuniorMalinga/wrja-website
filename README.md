# West Rand Judo Association Website

A website for the **West Rand Judo Association (WRJA)**, an umbrella organization supporting affiliated judo clubs across the West Rand, South Africa, including Golden Score Judo and KJK Judo Club.

The website covers:

* Kids, Adult, and Women's Judo programs
* Instructor profiles
* Upcoming events
* Club news
* Photo gallery
* Training session booking flow
* User login and sign-up interfaces
* Contact information and location
* Live Mapbox maps
* AI chatbot powered by Google Gemini

Built as the practical deliverable for the **INSY7315 Work-Integrated Learning** module.

## Current State

The website interface has been developed with real WRJA content, including instructor biographies, program descriptions, contact details, and published news coverage of club athletes.

The website includes a live Mapbox map and an AI chatbot powered by Google Gemini.

Authentication and booking interfaces are implemented on the frontend. The backend and AI chatbot are currently being tested and developed further.

Currently:

* Login and sign-up interfaces are implemented.
* The training booking interface is implemented.
* The Gemini AI chatbot is implemented.
* An Express/Node.js backend is implemented for the chatbot.
* User accounts are not yet stored in a production database.
* Bookings are not yet stored in a production database.
* Admin functionality is currently a frontend implementation.

## Technologies

* React
* Vite
* JavaScript
* CSS
* React Router
* Node.js
* Express
* Google Gemini AI
* Mapbox
* Git/GitHub

## Setup

### 1. Install frontend dependencies

From the root project folder:

```powershell
npm install
```

### 2. Install backend dependencies

```powershell
cd server
npm install
cd ..
```

### 3. Create the required `.env.local` files

**IMPORTANT:** The `.env.local` files are intentionally **not included in the GitHub repository** because they contain API credentials.

Anyone cloning this project must create the required environment files manually.

Create this file in the **root project folder**:

```text
.env.local
```

Add:

```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

Then create another file inside the server folder:

```text
server/.env.local
```

Add:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Replace the placeholder values with your own API credentials.

**Do not copy API keys from someone else's environment file or commit your `.env.local` files to GitHub.**

### Required Environment Files

Your project should look like:

```text
wrja-website/
│
├── .env.local              ← YOU MUST CREATE THIS
│
├── server/
│   ├── .env.local          ← YOU MUST CREATE THIS
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── ...
```

The `.env.local` files are required for the application to work correctly.

## Run Locally

The project is configured to start the frontend and backend together.

From the root project folder:

```powershell
npm run dev
```

This starts:

```text
Vite frontend
Express/Gemini backend
```

The frontend normally runs at:

```text
http://localhost:5173
```

## Build

To create a production build:

```powershell
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── NavigationBar
│   ├── SiteFooter
│   ├── PageHeader
│   ├── Reveal
│   ├── HeroSlider
│   ├── ProgramsSection
│   ├── TrainersSection
│   ├── NewsPost
│   ├── GalleryItem
│   ├── GalleryLightbox
│   ├── ContactForm
│   ├── ContactMap
│   ├── LocationSection
│   └── Other reusable sections and cards
│
├── pages/
│   ├── HomePage
│   ├── AboutPage
│   ├── ProgramsPage
│   ├── ProgramDetailPage
│   ├── EventsPage
│   ├── NewsPage
│   ├── NewsDetailPage
│   ├── GalleryPage
│   ├── GalleryDetailPage
│   ├── ContactPage
│   ├── BookingPage
│   ├── LoginPage
│   ├── SignupPage
│   └── AdminPage
│
├── data/
│   ├── programs.js
│   ├── instructors.js
│   ├── newsPosts.js
│   ├── galleryItems.js
│   └── faq.js
│
├── services/
│   └── geminiChat.js
│
├── hooks/
│   └── useScrollReveal.js
│
├── styles/
│   ├── base.css
│   ├── home.css
│   ├── programs.css
│   ├── events.css
│   ├── news.css
│   ├── about.css
│   ├── contact.css
│   ├── auth.css
│   ├── gallery.css
│   └── booking.css
│
├── App.jsx
└── main.jsx

server/
├── server.js
├── package.json
├── package-lock.json
└── .env.local
```

## AI Chatbot

The website includes an AI chatbot powered by **Google Gemini**.

The frontend chatbot service is located at:

```text
src/services/geminiChat.js
```

The backend server is located at:

```text
server/server.js
```

The chatbot communicates with the Express backend so that the Gemini API key is not exposed directly in the frontend.

The project also contains WRJA-specific FAQ information:

```text
src/data/faq.js
```

The AI chatbot is currently under testing and debugging.

## Environment Security

Never commit the following files to GitHub:

```text
.env
.env.local
server/.env
server/.env.local
```

These files can contain private API credentials.

The project should instead use placeholder/example files if environment variable documentation is required.

For example:

```text
.env.example
server/.env.example
```

These example files can contain:

```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

and:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## Content Management

The website uses JavaScript data files as the single source of truth for shared content.

These include:

```text
src/data/programs.js
src/data/instructors.js
src/data/newsPosts.js
src/data/galleryItems.js
src/data/faq.js
```

This allows the same content to be displayed consistently across different pages without duplicating information.

## Naming Convention

The project uses full, descriptive names throughout the codebase.

Pages follow the naming convention:

```text
HomePage
AboutPage
ProgramsPage
ProgramDetailPage
EventsPage
NewsPage
NewsDetailPage
GalleryPage
GalleryDetailPage
ContactPage
BookingPage
LoginPage
SignupPage
AdminPage
```

Components and variables use descriptive names rather than unexplained abbreviations.

## Authentication Status

The following frontend authentication pages have been implemented:

* Login
* Sign-up
* Authentication interface

A production authentication system has not yet been fully connected.

Future authentication functionality will allow users to:

* Create accounts
* Log in
* Log out
* Maintain their profile
* Access member-specific functionality

## Booking Status

The training session booking interface has been implemented on the frontend.

A backend database will eventually be used to:

1. Receive booking submissions.
2. Validate booking information.
3. Store bookings.
4. Associate bookings with registered users.
5. Allow administrators to view and manage bookings.

## Mapbox

Mapbox is used to display the WRJA location on the Contact and Home pages.

The application reads the Mapbox token from:

```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

The token must be placed in the root:

```text
.env.local
```

**Remember to create this file after cloning the repository.**

## Next Steps

### Backend

Continue connecting the website to Firebase or another backend service to provide:

* User authentication
* User accounts
* Athlete/member records
* Event registration
* Training bookings
* Database storage

### Authentication

Connect the existing Login and Sign-up pages to the authentication system so users can:

* Create accounts
* Log in
* Log out
* Maintain their profile
* Access member-specific functionality

### Booking System

Connect the existing booking form to the backend so bookings can be:

* Created
* Stored
* Retrieved
* Updated
* Cancelled

### Admin System

Connect the existing Admin page to a database and authentication system.

The committee should eventually be able to:

* Add news posts
* Edit news posts
* Delete news posts
* Add events
* Edit events
* Delete events
* Add gallery images
* Remove gallery images
* Manage bookings
* View registered members

### Real Media

Replace remaining placeholder media with:

* Real instructor headshots
* Real training photographs
* Real competition photographs
* Real event photographs
* Additional WRJA club imagery

## Project Status

| Feature                           | Status                  |
| --------------------------------- | ----------------------- |
| Frontend                          | Ongoing                 |
| Responsive interface              | Complete                |
| WRJA content                      | Implemented             |
| Mapbox integration                | Implemented             |
| Login interface                   | Complete                |
| Sign-up interface                 | Complete                |
| Booking interface                 | Complete                |
| AI chatbot                        | Implemented / Testing   |
| Express backend                   | Implemented / Testing   |
| Database                          | Not yet implemented     |
| Production authentication         | Not yet implemented     |
| Persistent bookings               | Not yet implemented     |
| Admin content management          | Frontend implementation |
| Real instructor/event photography | Partially outstanding   |

## Academic Context

This project was developed as the practical deliverable for the:

**INSY7315 Work-Integrated Learning module**

The website demonstrates the practical application of web application development principles, including component-based development, responsive web design, reusable data structures, client-side routing, third-party service integration, backend development, and AI integration.
