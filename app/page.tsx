import HeroSectionHome from "./components/HeroSectionHome";
import NationwidePresence from "./components/NationwidePresence";
import Curriculum from "./components/Curriculum";
import EducationalHighlights from "./components/EducationalHighlights";
import Faq from "./components/Faq";
import MapEmbed from "./components/MapEmbed";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brightenova International School Barbigha",
  description: "Brightenova International School Barbigha is a group of top schools in India offering comprehensive learning solutions for young minds right from their formative years to grade 12.",
  keywords: "chain of schools in bangalore, education franchise opportunities",
  // other metadata
};

export default function Home() {
  return (
    <div>
      <HeroSectionHome />
      <NationwidePresence />
      <Curriculum />
      <EducationalHighlights />
      <Faq />
      <MapEmbed />
    </div>
  );
}
