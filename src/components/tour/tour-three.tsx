"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { JobPost } from "@/types/job-d-t";
import JobItemThree from "./tour-item/tour-item-three";

export default function JobThree() {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setJobs(response.data.jobs || response.data || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="it-featured-area it-featured-style-2 it-featured-style-3  pb-120 p-relative">
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
            {loading ? (
              <div className="col-12 text-center">
                <p className="text-center">Loading jobs...</p>
              </div>
            ) : jobs.length > 0 ? (
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
