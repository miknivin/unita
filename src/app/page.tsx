import HomeTwoMain from "@/pages/homes/home-2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNITAG Ltd",
};
// export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <>
      <HomeTwoMain />
    </>
  );
}
