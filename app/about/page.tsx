import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import JourneySection from "../components/JourneySection";
import MessageSection from "../components/MessageSection";
import LeaderSection from "../components/LeaderSection";
import TeamSection from "../components/TeamSection";
import Breadcrumb from "../components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Brightenova International School Barbigha",
  description: "Brightenova International School Barbigha is a group of top schools in India offering comprehensive learning solutions for young minds right from their formative years to grade 12.",
  keywords: "chain of schools in bangalore, education franchise opportunities",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Us" />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <MessageSection />
      <LeaderSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;
