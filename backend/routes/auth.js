const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { usermodel } = require("../model/usermodel");
const { protect, requireRole } = require("../middleware/auth");

// creates a token and stores it in a cookie
const sendToken = (res, user, status) => {
  const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
    expiresIn: "3d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });

  res.status(status).json({
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await usermodel.create({ username, email, password });
    sendToken(res, user, 201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    sendToken(res, user, 200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

// WHO AM I (only works if logged in)
router.get("/me", protect, (req, res) => {
  res.json({ user: req.user });
});

// ADMIN ONLY example
router.get("/admin", protect, requireRole("admin"), (req, res) => {
  res.json({ message: "Welcome, admin" });
});

module.exports = router;