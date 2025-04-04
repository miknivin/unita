import cloudinary from "../lib/cloudinary/cloudinary";
import streamifier from "streamifier";

export async function uploadToCloudinary(file) {
  if (!file) {
    throw new Error("No file provided");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "raw", // PDF/doc files should be raw
        folder: "resumes",
        filename_override: file.name, // 👈 this ensures Cloudinary keeps the original filename
        use_filename: true, // 👈 keeps your file name intact
        unique_filename: true, // 👈 optional: if you want to keep it unchanged
        format: "pdf", // 👈 optional: helps with correct content type
        type: "upload",
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return reject(error);
        }
        resolve(result); // result.secure_url is the uploaded PDF
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
}
