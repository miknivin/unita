import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connection";
import { Applicant } from "@/models/Applicant";
import { uploadToCloudinary } from "@/utils/upload"; // or wherever your method is

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();

    const jobPost = formData.get("jobId"); // ✅ Match frontend
    const fullName = formData.get("name") + " " + formData.get("surname");
    const email = formData.get("email");
    const phone = formData.get("contactNumber");
    const address = formData.get("address");
    const resumeFile = formData.get("resume");

    if (!jobPost || !fullName || !email || !phone || !address || !resumeFile) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }
    //console.log(resumeFile);

    const uploadedResume = await uploadToCloudinary(resumeFile);

    const resumeUrl = uploadedResume?.url;

    if (!resumeUrl) {
      return NextResponse.json(
        { error: "Failed to upload resume" },
        { status: 500 }
      );
    }

    const newApplicant = new Applicant({
      jobPost,
      fullName,
      email,
      phone,
      address,
      resume: {
        url: resumeUrl,
        public_id: null, // set if you use Cloudinary, etc.
      },
    });

    await newApplicant.save();

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        applicant: newApplicant,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Resume Upload Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
