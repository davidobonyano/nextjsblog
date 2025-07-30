"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // ✅ New
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    const res = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setEmail(""); // ✅ Clear input
      setMessage("");
    } else {
      setError(data?.errors?.email?.[0] || data?.errors?.name?.[0] || data?.errors?.message?.[0] || "Submission failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">Leave Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="border w-full p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email"
          className="border w-full p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          className="border w-full p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>

        {submitted && <p className="text-green-500">✅ Thank you for your feedback!</p>}
        {error && <p className="text-red-500">❌ {error}</p>}
      </form>
    </div>
  );
}
