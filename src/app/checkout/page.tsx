import { Metadata } from "next";
import CheckoutMain from "@/pages/checkout/checkout";

export const metadata: Metadata = {
  title: "UNITAG - Checkout Page",
};

const CheckoutPage = () => {
  return <CheckoutMain />;
};

export default CheckoutPage;
