import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { BrevoClient } from "@getbrevo/brevo";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

app.post("/send-email", async (req, res) => {
  try {
    const { user_name, user_email, subject, message } = req.body;

    if (!user_name || !user_email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const result = await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Shashank Portfolio",
        email: process.env.EMAIL_FROM,
      },

      to: [
        {
          email: process.env.EMAIL_TO,
          name: "Shashank",
        },
      ],

      replyTo: {
        email: user_email,
        name: user_name,
      },

      subject: subject,

      htmlContent: `
        <h2>New Portfolio Message</h2>

        <p><b>Name:</b> ${user_name}</p>
        <p><b>Email:</b> ${user_email}</p>
        <p><b>Subject:</b> ${subject}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent:", result);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (err) {
    console.error("Brevo Error:", err);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});