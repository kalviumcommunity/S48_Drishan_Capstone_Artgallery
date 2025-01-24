const express = require("express");
const cors = require("cors"); // Import CORS
const dotenv = require("dotenv");
const connectDB = require("./db");
const User = require("./Models/Signup")

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Connect to MongoDB
connectDB();

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create new user
    const newUser = await User.create({ name, email, password });
    console.log("User Created: ", newUser);  // Log the newly created user
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
