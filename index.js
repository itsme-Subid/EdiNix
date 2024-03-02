const express = require("express");
const cors = require("cors");

// Create an Express application
const app = express();

// Use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", require("./routes/github"));

//Default route
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // console.log(`Server is listening on port ${PORT}!`);
  console.log(`Server is running at http://localhost:${PORT}`);
});
