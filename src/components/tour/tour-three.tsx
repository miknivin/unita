import Link from "next/link";
import { JobPost } from "@/types/job-d-t";
import JobItemThree from "./tour-item/tour-item-three";
import axios from "axios";

async function getJobs(): Promise<JobPost[]> {
  try {
    // Determine base URL without relying on next/headers
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001" // Default for development
        : process.env.NEXT_PUBLIC_BASE_URL ||
          "https://unita-agency.netlify.app"; // Set this in .env

    // Use axios with custom headers to prevent caching
    const response = await axios.get(`${baseUrl}/api/jobs`, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

    return response.data.jobs || response.data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

export default async function JobThree() {
  const jobs = await getJobs();

  return (
    <div className="it-featured-area it-featured-style-2 it-featured-style-3 pb-120 p-relative">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="it-featured-title-box mb-75 text-center">
              <h3 className="it-section-title">Top Opportunities</h3>
            </div>
          </div>
        </div>
        <div className="it-featured-item-wrap it-featured-style-3-space mb-30">
          <div className="row">
            {jobs.length > 0 ? (
              jobs.map((job: JobPost) => (
                <div
                  key={job._id}
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <JobItemThree job={job} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No jobs available at the moment.</p>
              </div>
            )}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="it-featured-action text-center">
            <Link href="/jobs" className="it-btn-secondary">
              View All Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
