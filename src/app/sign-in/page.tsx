import { Metadata } from "next";
import SignInMain from "@/pages/sign-in/sign-in";

export const metadata: Metadata = {
  title: "UNITAG - SignIn Page",
};

const SignInPage = () => {
  return <SignInMain />;
};

export default SignInPage;
