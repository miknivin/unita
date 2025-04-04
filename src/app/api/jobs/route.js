import mongoose from "mongoose";
import { JobPost } from "@/models/JobpostSchema.js";
import { NextResponse } from "next/server";

// Simplified DB connection logic
async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
  }

  await mongoose.connect(mongoUri);
}

export async function GET() {
  try {
    await dbConnect();

    const jobPosts = await JobPost.find().populate("company");

    const res = NextResponse.json({
      success: true,
      jobs: jobPosts,
      count: jobPosts.length,
    });

    // Ensure fresh data on every fetch
    res.headers.set("Cache-Control", "no-store");

    return res;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Error retrieving job posts",
      },
      { status: 500 }
    );
  }
}
