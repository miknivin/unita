import { Metadata } from "next";
import { tourPackagesData } from "@/data/tour-packages-data";
import TourDetailsMain from "@/pages/tour-details/tour-details";

export const metadata: Metadata = {
  title: "UNITA - Tour Details Page",
};

export default function TourDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const tour = tourPackagesData.find((tour) => tour.id === Number(params.id));
  return tour ? (
    <TourDetailsMain tour={tour} />
  ) : (
    <div className="text-center pt-100">
      Tour not found with id: {params.id}
    </div>
  );
}
