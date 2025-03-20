import { Metadata } from "next";
import WishlistMain from "@/pages/wishlist/wishlist";

export const metadata: Metadata = {
  title: "UNITA - Wishlist Page",
};

const WishlistPage = () => {
  return <WishlistMain />;
};

export default WishlistPage;
