import { JobPost } from "@/models/JobpostSchema.js";
import { NextResponse } from "next/server";
import dbConnect from "./../../../lib/db/connection";

export async function GET() {
  try {
    await dbConnect();
    const jobPosts = await JobPost.find().populate("company");

    const res = NextResponse.json({
      success: true,
      jobs: jobPosts,
      count: jobPosts.length,
    });

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
