const express = require('express');
const cors    = require('cors');
const app     = express();

// ── Middleware ────────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:3000', methods: ['GET','POST'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────────────────
const appointmentRoute  = require('./routes/appointment');
const contactRoute      = require('./routes/contact');
const newsletterRoute   = require('./routes/newsletter');
const faqRoute          = require('./routes/faq');

app.use('/api/appointment', appointmentRoute);
app.use('/api/contact',     contactRoute);
app.use('/api/newsletter',  newsletterRoute);
app.use('/api/faq',         faqRoute);

// ── Health Check ──────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Dr Ahalya\'s Dento Neuro Clinic API is running', timestamp: new Date().toISOString() });
});

// ── 404 ───────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Start ─────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🦷🧠 Dr Ahalya's Dento Neuro Clinic API running on port ${PORT}`);
});
