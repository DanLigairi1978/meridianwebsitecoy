const express = require('express');
const path = require('path');
const app = express();

// Cloud Run provides the PORT environment variable
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// Serve all static files from the root directory of the project
// This will serve index.html, the .tsx files, and the new /images directory
app.use(express.static(__dirname));

// Since this is a Single Page Application (SPA),
// all unhandled routes should fall back to index.html.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running and listening at http://${HOST}:${PORT}`);
});
