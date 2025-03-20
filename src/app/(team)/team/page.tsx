import { Metadata } from "next";
import TeamMain from "@/pages/team/team";

export const metadata: Metadata = {
  title: "UNITA - Team Page",
};

const TeamPage = () => {
  return <TeamMain />;
};

export default TeamPage;
