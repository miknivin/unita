import { Metadata } from "next";
import { ServicesData } from "@/data/tour-packages-data";
import ServicesDetailsMain from "@/pages/tour-details/tour-details";

export const metadata: Metadata = {
  title: "UNITAG - Tour Details Page",
};

export default function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const service = ServicesData.find((tour) => tour.id === Number(params?.id));
  return service ? (
    <ServicesDetailsMain service={service} />
  ) : (
    <div className="text-center pt-100">
      Service not found with id: {params?.id}
    </div>
  );
}
