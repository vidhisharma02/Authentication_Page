const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const Employee = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Registration Route (Missing in your code)
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
      const existingUser = await Employee.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ success: false, message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Employee({ name, email: email.toLowerCase(), password: hashedPassword });
      await newUser.save();

      res.json({ success: true, message: "Registration successful!" });
  } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ success: false, message: "Server error" });
  }
});


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Employee.findOne({ email });
        if (!user) {
            return res.json("User Not Found");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json("Invalid Credentials");
        }

        res.json("Success");
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error");
    }
});

app.listen(3001, () => console.log("Server running on port 3001"));
