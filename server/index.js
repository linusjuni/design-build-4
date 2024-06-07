const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Serve static assets (built frontend)
app.use(express.static(path.resolve(__dirname, '../client/build')));

// API endpoint
app.get('/api', (req, res) => {
    res.json({ message: "Hello from server! - 1" });
});

// Serve the frontend for any other route
app.get('*', (req, res) => {
    res.sendFile(express.static(path.resolve(__dirname, '../client/build', 'index.html')));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});