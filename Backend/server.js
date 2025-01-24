const express = require("express");
const cors = require("cors"); // Import CORS
const dotenv = require("dotenv");
const connectDB = require("./db");
const User = require("./Models/SIgnup");

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Connect to MongoDB
connectDB();

// POST API - Create a new user
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create new user
    const newUser = await User.create({ name, email, password });
    console.log("User Created: ", newUser); // Log the newly created user
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// GET API - Retrieve all user details
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send the user data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
