// Top of app/api/feedback/route.ts
import { z } from "zod";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

// Updated in-memory storage with ID
const feedbackStore: {
  id: string;
  name: string;
  email: string;
  message: string;
}[] = [];

// Zod schema
const FeedbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

// POST - Save feedback
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = FeedbackSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    const newFeedback = {
      id: randomUUID(), // generate unique ID
      name,
      email,
      message,
    };

    feedbackStore.push(newFeedback);

    console.log("✅ New feedback stored:", newFeedback);

    return NextResponse.json({
      success: true,
      message: "Feedback received successfully!",
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }
}

// GET - Return all feedback
export async function GET() {
  return NextResponse.json({
    success: true,
    feedbacks: feedbackStore,
  });
}
