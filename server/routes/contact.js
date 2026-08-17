const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact.js");

// ── Nodemailer transporter ───────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

// ── POST /api/contact ───────────────────────────────────────────────────────
router.post(
  "/",
  [
    body("fullName").trim().notEmpty().withMessage("Full name is required").escape(),
    body("phone").trim().notEmpty().withMessage("Phone number is required").escape(),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please enter a valid email")
      .normalizeEmail()
      .escape(),
    body("message").optional().trim().escape(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        });
      }

      const { fullName, phone, email, message } = req.body;

      // Check DB connection
      if (mongoose.connection.readyState !== 1) {
        return res.status(503).json({
          success: false,
          message: "Database is temporarily unavailable. Please try again shortly.",
        });
      }

      // Rate limit: 1 submission per email every 5 minutes
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      const recent = await Contact.findOne({
        email: email.toLowerCase(),
        createdAt: { $gte: fiveMinutesAgo },
      });

      if (recent) {
        return res.status(429).json({
          success: false,
          message: "You recently submitted an enquiry. Please wait a few minutes.",
        });
      }

      // 1. Save to MongoDB
      const contact = new Contact({
        fullName,
        phone,
        email,
        message: message || "",
      });
      await contact.save();

      // 2. Send email to ADMIN ONLY
      if (ADMIN_EMAIL && process.env.SMTP_USER) {
        transporter
          .sendMail({
            from: `"Jambooneer Website" <${process.env.SMTP_USER}>`,
            to: ADMIN_EMAIL,
            subject: `🔔 New Enquiry from ${fullName}`,
            html: `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #eee;border-radius:12px;">
                <h2 style="color:#6A1B9A;">📬 New Contact Enquiry</h2>
                <table style="width:100%;border-collapse:collapse;margin-top:16px;">
                  <tr><td style="padding:10px;border-bottom:1px solid #f0f0f0;font-weight:bold;">Name</td><td style="padding:10px;border-bottom:1px solid #f0f0f0;">${fullName}</td></tr>
                  <tr><td style="padding:10px;border-bottom:1px solid #f0f0f0;font-weight:bold;">Email</td><td style="padding:10px;border-bottom:1px solid #f0f0f0;">${email}</td></tr>
                  <tr><td style="padding:10px;border-bottom:1px solid #f0f0f0;font-weight:bold;">Phone</td><td style="padding:10px;border-bottom:1px solid #f0f0f0;">${phone}</td></tr>
                  <tr><td style="padding:10px;border-bottom:1px solid #f0f0f0;font-weight:bold;">Message</td><td style="padding:10px;border-bottom:1px solid #f0f0f0;">${message || "—"}</td></tr>
                  <tr><td style="padding:10px;font-weight:bold;">Time</td><td style="padding:10px;">${new Date().toLocaleString("en-IN")}</td></tr>
                </table>
                <p style="margin-top:20px;font-size:12px;color:#888;">Enquiry ID: ${contact._id}</p>
              </div>
            `,
            text: `New enquiry from ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message || "—"}`,
          })
          .catch((err) => console.error("[Admin Email Error]", err.message));
      } else {
        console.log("[POST /api/contact] Skipping admin email — SMTP not configured");
      }

      res.status(201).json({
        success: true,
        message: "Thank you! We've received your enquiry.",
        data: {
          id: contact._id,
          createdAt: contact.createdAt,
        },
      });
    } catch (error) {
      console.error("[Contact POST Error]", error);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
      });
    }
  }
);

// ── GET /api/contact ────────────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const { status, page = 1, limit = 50 } = req.query;
    const filter = status ? { status } : {};

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      count: contacts.length,
      total,
      data: contacts,
    });
  } catch (error) {
    console.error("[Contact GET Error]", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ── PATCH /api/contact/:id/status ───────────────────────────────────────────
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["new", "contacted", "resolved", "spam"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.json({ success: true, data: contact });
  } catch (error) {
    console.error("[Contact PATCH Error]", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;