import { Metadata } from "next";
import CheckoutMain from "@/pages/checkout/checkout";

export const metadata: Metadata = {
  title: "UNITA - Checkout Page",
};

const CheckoutPage = () => {
  return <CheckoutMain />;
};

export default CheckoutPage;
