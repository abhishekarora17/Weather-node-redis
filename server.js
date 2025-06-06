// server.js
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const weatherRoutes = require('./routes/weather');

app.use('/', weatherRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
