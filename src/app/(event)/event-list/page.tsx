import { Metadata } from "next";
import EventListMain from "@/pages/event/event-list";

export const metadata: Metadata = {
  title: "UNITAG - Event Page",
};

const EventListPage = () => {
  return <EventListMain />;
};

export default EventListPage;
