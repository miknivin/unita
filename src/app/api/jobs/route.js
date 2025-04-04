import { JobPost } from "@/models/Jobpost";
import { NextResponse } from "next/server";
import dbConnect from "./../../../lib/db/connection";

export async function GET() {
  try {
    await dbConnect();
    const jobPosts = await JobPost.find().populate("company");
    console.log(jobPosts);

    return NextResponse.json({
      success: true,
      jobs: jobPosts,
      count: jobPosts.length,
    });
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
