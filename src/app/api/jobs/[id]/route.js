// app/api/jobPosts/[id]/route.js

import { NextResponse } from "next/server";
import { JobPost } from "@/models/JobpostSchema";

// GET: Retrieve a job post by ID
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const jobPost = await JobPost.findById(id).populate("company");
    if (!jobPost) {
      return NextResponse.json(
        {
          success: false,
          message: "Job post not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: jobPost,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Error retrieving job post",
      },
      { status: 500 }
    );
  }
}
