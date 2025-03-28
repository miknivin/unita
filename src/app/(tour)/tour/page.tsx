import { Metadata } from "next";
import TourMain from "@/pages/tour/tour";

export const metadata: Metadata = {
  title: "UNITAG - Tour Page",
};

const TourPage = () => {
  return <TourMain />;
};

export default TourPage;
