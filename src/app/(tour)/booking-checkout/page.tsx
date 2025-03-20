import { Metadata } from "next";
import BookingCheckoutMain from "@/pages/booking-checkout/booking-checkout";

export const metadata: Metadata = {
  title: "UNITA - Booking Checkout Page",
};

const BookingCheckoutPage = () => {
  return <BookingCheckoutMain />;
};

export default BookingCheckoutPage;
