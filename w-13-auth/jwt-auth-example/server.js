require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const auth = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✓ MongoDB connected"))
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    });

// 🆓 Public route
app.get("/", (req, res) => {
    res.json({ message: "Hello! Anybody can access this." });
});

// 👤 Register
app.post("/api/auth/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ error: "Email and password required." });
        }

        let existing = await User.findOne({ email });
        if (existing) {
            return res.status(409).json({ error: "Email already registered." });
        }

        const user = new User({ email, password });
        await user.save();

        return res.status(201).json({ message: "Registration successful." });
    } catch (err) {
        console.error("Register error:", err);
        return res.status(500).json({ error: "Server error" });
    }
});

// 🔐 Login & generate JWT
app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res
                .status(401)
                .json({ error: "Invalid email or password." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        return res.json({
            token,
            user: { id: user._id, email: user.email },
        });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ error: "Server error" });
    }
});

// ✅ Protected route (login required)
app.get("/api/protected", auth, (req, res) => {
    res.json({
        message: "You have accessed a protected route.",
        user: req.user,
    });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
