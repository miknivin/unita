"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import EventDetailsArea from "@/components/event/event-details/event-details-area";
import Newsletter from "@/components/newsletter/newsletter";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";
import { JobPost } from "@/types/job-d-t";

const EventDetailsMain = ({ params }: { params: { id: string } }) => {
  const [job, setJob] = useState<JobPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      axios
        .get(`/api/jobs/${params.id}`)
        .then((response) => {
          setJob(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching job post:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center pt-10">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <Wrapper>
      <HeaderTwo />
      <main>
        <Breadcrumb title={job.jobTitle} subtitle="Job Details" />
        <EventDetailsArea event={job} />
        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default EventDetailsMain;
