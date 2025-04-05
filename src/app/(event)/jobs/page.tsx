import { Metadata } from "next";
import EventGridMain from "@/pages/event/event-grid";

// This prevents automatic static optimization
export const dynamic = 'force-dynamic';
// This forces the page to be regenerated on each request
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  // Using a function ensures metadata is generated at request time
  return {
    title: "UNITAG - Job Page",
  };
}

const EventGridPage = () => {
  return <EventGridMain />;
};

export default EventGridPage;