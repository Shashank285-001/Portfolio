import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Safely handle response
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send email"
        );
      }

      console.log("Email response:", data);

      toast.success("Message sent successfully! ✅");

      // Clear form
      setFormData({
        user_email: "",
        user_name: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Email error:", error);

      toast.error(
        error.message || "Failed to send message. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer position="top-right" />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          CONTACT
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;