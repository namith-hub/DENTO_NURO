# DENTO NEURO CLINIC — Premium Website

A luxury, world-class healthcare website for **DENTO NEURO CLINIC** — a premium integrated Dentistry + Neurosurgery clinic in Mysuru, Karnataka.

---

## 🏗️ Tech Stack

| Layer      | Technology                              |
|------------|----------------------------------------|
| Frontend   | React.js (CRA), React Router v6        |
| Animations | Framer Motion, AOS                     |
| Slider     | Swiper.js                              |
| Icons      | React Icons                            |
| Styling    | Vanilla CSS (CSS Modules + Variables)  |
| Fonts      | Google Fonts — Outfit + Poppins        |
| Backend    | Node.js + Express                      |

---

## 📁 Project Structure

```
dento-neuro-clinic/
├── client/               # React CRA frontend
│   ├── public/
│   │   └── logo.png      # Clinic logo
│   └── src/
│       ├── components/   # All section components
│       ├── styles/       # Global CSS design system
│       ├── App.js
│       └── index.js
└── server/               # Express backend
    ├── routes/           # appointment, contact, newsletter
    └── app.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Frontend (Client)

```bash
cd client
npm install
npm start
```
Opens at **http://localhost:3000**

### Backend (Server)

```bash
cd server
npm install
npm start
```
API available at **http://localhost:5000**

---

## 🎨 Color Palette

| Token         | Color     | Hex       |
|--------------|-----------|-----------|
| Primary Gold | Gold      | `#C8A25A` |
| Rose Gold    | Rose Gold | `#D7A58C` |
| Background   | Ivory     | `#FAF8F5` |
| Section Bg   | Beige     | `#F3ECE5` |
| Text         | Brown     | `#3B2F2F` |

---

## 📱 Website Sections

1. **Hero** — Fullscreen animated hero with glassmorphism card
2. **About** — Mission, Vision, animated counters
3. **Doctors** — Flip-card doctor profiles
4. **Dental Services** — 15 service cards with modals
5. **Neurosurgery** — Tabbed neuro services (Brain/Spine/Nerve/Diagnostic/Post-op)
6. **Why Choose Us** — 7 glass cards on dark background
7. **Facilities** — 8 premium facility cards
8. **Gallery** — CSS masonry grid with lightbox
9. **Testimonials** — Swiper.js slider with star ratings
10. **FAQ** — Accordion FAQ
11. **Appointment** — Booking form with validation + popup
12. **Contact** — Info cards + Google Maps embed
13. **Footer** — Brand, links, hours, socials

---

## 🔗 API Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| POST   | /api/appointment   | Book appointment     |
| POST   | /api/contact       | Contact form         |
| POST   | /api/newsletter    | Newsletter subscribe |
| GET    | /api/health        | Health check         |

---

## 📍 Clinic Details

**Address:** 165/1, Sahukar Chennaiah Road, TK Layout, Saraswathipuram, Mysuru, Karnataka – 570009

**Hours:** Mon–Fri: 9AM–7PM | Sat: 9AM–5PM | Emergency: 24/7
