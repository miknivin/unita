import { JobPost } from "@/types/job-d-t"; // Ensure this points to the updated interface
import Link from "next/link";

const JobItemThree = ({ job }: { job: JobPost }) => {
  // Helper function to format salary range, showing both AED and USD if they exist
  const formatSalaryRange = (
    salaryRange?: JobPost["salaryRange"]
  ): string[] => {
    if (!salaryRange) return ["NA"];

    const aedMin = salaryRange.aed?.min;
    const aedMax = salaryRange.aed?.max;
    const usdMin = salaryRange.usd?.min;
    const usdMax = salaryRange.usd?.max;

    let result: string[] = [];

    // Add AED range if both min and max exist
    if (aedMin !== undefined && aedMax !== undefined) {
      result.push(
        `AED ${aedMin.toLocaleString()} - ${aedMax.toLocaleString()}`
      );
    } else if (aedMin !== undefined) {
      result.push(`AED ${aedMin.toLocaleString()} (min)`);
    }

    // Add USD range if both min and max exist
    if (usdMin !== undefined && usdMax !== undefined) {
      result.push(
        `USD ${usdMin.toLocaleString()} - ${usdMax.toLocaleString()}`
      );
    } else if (usdMin !== undefined) {
      result.push(`USD ${usdMin.toLocaleString()} (min)`);
    }

    return result.length > 0 ? result : ["NA"];
  };

  const salaryRanges = formatSalaryRange(job.salaryRange);

  return (
    <div>
      <Link
        href={`/job-details/${job._id}`}
        style={{ boxShadow: "0 4px 30px 0 rgba(0, 0, 0, 0.1)" }}
        className="it-events-item p-0 m-0 border-0"
      >
        <div className="it-events-date-box d-flex align-items-center justify-content-center">
          <span className="it-events-date fs-3">
            {job.company?.name || "Unknown Company"}
          </span>
        </div>
        <div className="it-events-content p-3 border-top-0 border rounded-bottom-3 border-1 border-black">
          <div className="it-events-meta mb-10 d-flex align-items-center">
            <div className="it-events-meta-icon mr-5">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <span className="it-events-meta-text">
              {job.jobLocation || "Location not specified"}
            </span>
          </div>
          <h3 className="it-events-title">{job.jobTitle}</h3>
          {salaryRanges.map((range, index) => (
            <span
              key={index}
              className="bg-success-subtle px-3 py-1 border rounded-3 mb-3 d-inline-block mr-2"
            >
              {range}
            </span>
          ))}
          <p style={{ marginRight: "0" }} className="job-description mt-3 mr-0">
            {job.jobDescription}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default JobItemThree;
