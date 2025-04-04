import { StaticImageData } from 'next/image';

export interface IEventDT {
  id: number;
  title: string;
  image: StaticImageData;
  companyName?:string;
  description: string;
  detailsImage: StaticImageData;
  eventTime: string;
  eventDate: string;
  eventMonth: string;
  eventYear: string;
  eventAddress: string;
}
