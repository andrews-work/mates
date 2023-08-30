const express = require('express');
const accountRoutes = require('../src/app/Account/routes/accountRoutes');

const app = express();

// Set up routes
app.use('/account', accountRoutes);

// ... other middleware and routes

// Start the server
app.listen(3000, () => console.log('Server running on port 3000.'));