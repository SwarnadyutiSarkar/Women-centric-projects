const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Online Counseling Platform');
});

// Example API endpoint for counseling sessions
app.post('/counseling', (req, res) => {
  const { clientName, counselorName, dateTime, sessionDetails } = req.body;
  // Here you can implement logic to handle the counseling session
  // For example, store session details in a database
  res.json({ success: true, message: 'Counseling session booked successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
