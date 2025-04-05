"use client";
import Link from "next/link";
import { JobPost } from "@/types/job-d-t";
import JobItemThree from "./tour-item/tour-item-three";
import axios from "axios";
import { useState, useEffect } from "react";

async function getJobs(): Promise<JobPost[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://unita-admin.vercel.app";
    const response = await axios.get(`${baseUrl}/api/job?t=${Date.now()}`, {});
    return response.data.jobs || response.data.data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

export default function JobThree() {
  const [jobs, setJobs] = useState<JobPost[]>([]);

  useEffect(() => {
    // Fetch jobs immediately and on every render
    async function fetchJobs() {
      const data = await getJobs();
      setJobs(data);
    }
    fetchJobs();

    // Optional: Poll the API every X seconds (e.g., 10 seconds)
    const interval = setInterval(fetchJobs, 10000); // Adjust interval as needed
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means it runs on mount; remove it to run on every render

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
            {jobs.length > 0 && (
              <Link href="/jobs" className="it-btn-secondary">
                View All Jobs
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
