"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-100 text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Get in Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded text-black placeholder-gray-500"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition">
          Request Callback
        </button>
      </form>
    </section>
  );
}