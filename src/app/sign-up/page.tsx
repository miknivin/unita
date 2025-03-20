import { Metadata } from "next";
import SignUpMain from "@/pages/sign-up/sign-up";

export const metadata: Metadata = {
  title: "UNITA - SignUp Page",
};

const SignUpPage = () => {
  return <SignUpMain />;
};

export default SignUpPage;
