require("dotenv").config();  // ← MUST be line 1, before any other require

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Debug env vars ───────────────────────────────────────────────────────────
console.log("🔧 ENV CHECK:");
console.log("   MONGO_URI:", process.env.MONGO_URI ? "✅ Loaded" : "❌ MISSING");
console.log("   SMTP_HOST:", process.env.SMTP_HOST || "❌ MISSING");
console.log("   SMTP_USER:", process.env.SMTP_USER || "❌ MISSING");
console.log("   ADMIN_EMAIL:", process.env.ADMIN_EMAIL || "❌ MISSING");

// ── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(`${new Date().toISOString()} | ${req.method} ${req.path} | ${res.statusCode} | ${Date.now() - start}ms`);
  });
  next();
});

// ── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    dbConnected: mongoose.connection.readyState === 1,
    timestamp: new Date().toISOString(),
  });
});

// ── 404 ──────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ── Global error handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("[SERVER ERROR]", err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message,
  });
});

// ── MongoDB Connection ───────────────────────────────────────────────────────
const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing. Create a .env file in the server/ folder.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    console.log("");
    console.log("💡 FIXES:");
    console.log("   1. Create .env inside server/ folder");
    console.log("   2. Add MONGO_URI=your-mongodb-url");
    console.log("   3. Whitelist your IP in Atlas → Network Access");
    console.log("   4. Restart the server");
    process.exit(1);
  }
};

startServer();