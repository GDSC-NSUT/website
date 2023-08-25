import "./team.css";
import TeamHeroSection from "./TeamHeroSection";
import MembersSection from "./MembersSection";
import DepartmentsSection from "./DepartmentsSection";

export default function Team() {
  return (
    <>
    <div className="team-page">
      <TeamHeroSection/>
      <MembersSection />
      <DepartmentsSection />
    </div>
    </>
  );
}