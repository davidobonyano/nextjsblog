// app/admin/feedback/page.tsx
"use client";
import { useEffect, useState } from "react";

type Feedback = {
  id: string;
  name: string;
  email: string;
  message: string;
};

export default function AdminFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        if (data.success) {
          setFeedbacks(data.feedbacks);
        }
      } catch (error) {
        console.error("Failed to fetch feedbacks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">All Feedback</h1>
      {loading ? (
        <p>Loading...</p>
      ) : feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((fb) => (
            <li key={fb.id} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {fb.name}</p>
              <p><strong>Email:</strong> {fb.email}</p>
              <p><strong>Message:</strong> {fb.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
