import { Metadata } from "next";
import EventDetailsMain from "@/pages/event-details/event-details";

export const metadata: Metadata = {
  title: "UNITAG - Job Details Page",
};

export default function EventDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Check if params and params.id exist
  if (!params || !params.id) {
    return <p>Invalid job ID or parameters not provided</p>;
  }

  return <EventDetailsMain params={params} />;
}
