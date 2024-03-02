const express = require("express");
const cors = require('cors');

// Create an Express application
const app = express();

// Use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Default route
app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});


// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
});
