"use client";

import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6">

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-gray-600">
          Have a project in mind? Send us a message and we will get back to you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

        </form>

        {/* Success Message */}
        {success && (
          <p className="text-green-600 text-center mt-6 font-medium">
            ✅ Message sent successfully!
          </p>
        )}

      </div>

    </section>
  );
}