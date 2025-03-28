import { StaticImageData } from "next/image";

export interface IServiceDT {
  id: number;
  image: StaticImageData;
  title: string;
  heading?: string;
  overview?: string;
  price: number;
  badgeTitle?: string;
  isFeature?: boolean;
  address: string;
  rating: string;
  review: string;
  duration: number;
  travelerCount: number;
  detailsImg: StaticImageData;
  serviceImage?:StaticImageData[];
  description?: string;
  shortDescription?: string;
  progresses: {
    title: string;
    value: string;
  }[];
  btnText: string;
  checkIn?: string;
  offerings?: {
    title: string;
    description: string;
  }[];
  whyUs?: any[];
}
