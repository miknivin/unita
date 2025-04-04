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
  return <EventDetailsMain params={params} />;
}
