const app = require('./app');

// Define the port number
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});