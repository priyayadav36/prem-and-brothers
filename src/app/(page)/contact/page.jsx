"use client";

import { useState } from "react";

export default function ContactUsForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill the information form");
      return;
    }

    alert("Form submitted successfully ✅");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 py-16 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/6e/5b/d1/6e5bd17938ee92070f8c7e102db8da60.jpg')", // 👈 image public folder me rakho
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* FORM CARD */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 md:p-10">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Get in touch with us
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      
    
    </section>
  );
}
