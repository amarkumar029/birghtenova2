"use client";

import { usePathname } from "next/navigation";
import DynamicSection from "../components/DynamicSection";
import Breadcrumb from "../components/Common/Breadcrumb";

const SectionPage = () => {
  const pathname = usePathname();
  const section = pathname.split("/").pop(); // ✅ URL se last part nikalo

  // ✅ Dono Breadcrumb Mappings ko Merge Karo
  const breadcrumbMap: { [key: string]: string } = {
    // Pehla Set (Academics, Facilities, Admissions, etc.)
    "about-us": "About Us",
    "mission-vision": "Mission & Vision",
    "our-founder": "Our Founder",
    "principal-message": "Principal Message",
  
    "nursery-level": "Nursery Level",
    "primary-level": "Primary Level",
    "middle-level": "Middle Level",
    "secondary-level": "Secondary Level",
    "senior-secondary-level": "Senior Secondary Level",
    "assessments": "Assessments",
    "learning-environment": "Learning Environment",
    "faculty": "Faculty",
    "academic-calendar": "Academic Calendar",
  
    "smart-classrooms": "Smart Classrooms",
    "labs": "Labs",
    "library": "Library",
    "art-room": "Art Room",
    "music-dance-rooms": "Music & Dance Rooms",
    "yoga-aerobics": "Yoga & Aerobics",
    "swimming-pool": "Swimming Pool",
    "playground": "Playground",
    "infirmary": "Infirmary",
    "cafeteria": "Cafeteria",
    "transport": "Transport",
  
    "photo-gallery": "Photo Gallery",
  
    "admission-process": "Admission Process",
    "admission-form": "Admission Form",
    "fee-structure": "Fee Structure",

    // Dusra Set (Campus Overview, Career, etc.)
    "campus-overview": "Campus Overview",
    "career": "Career",
    "download": "Download",
    "newsletter": "Newsletter",
    "privacy-policy": "Privacy Policy",
    "holiday-homework": "Holiday Homework",
    "faqs": "FAQs",
  };

  // ✅ Page Title Generate Karo
  const pageTitle = breadcrumbMap[section as string] || section?.replace("-", " ").toUpperCase();

  // ✅ Menu Mapping
  const menuMap: { [key: string]: string } = {
    "about-us": "About Us",
    "mission-vision": "About Us",
    "our-founder": "About Us",
    "principal-message": "About Us",

    "nursery-level": "Academics",
    "primary-level": "Academics",
    "middle-level": "Academics",
    "secondary-level": "Academics",
    "senior-secondary-level": "Academics",
    "assessments": "Academics",
    "learning-environment": "Academics",
    "faculty": "Academics",
    "academic-calendar": "Academics",

    "smart-classrooms": "Facilities",
    "labs": "Facilities",
    "library": "Facilities",
    "art-room": "Facilities",
    "music-dance-rooms": "Facilities",
    "yoga-aerobics": "Facilities",
    "swimming-pool": "Facilities",
    "playground": "Facilities",
    "infirmary": "Facilities",
    "cafeteria": "Facilities",
    "transport": "Facilities",

    "photo-gallery": "Gallery",

    "admission-process": "Admissions",
    "admission-form": "Admissions",
    "fee-structure": "Admissions",

    // Naya Data
    // "campus-overview": "Campus",
    // "career": "Opportunities",
    // "download": "Resources",
    // "newsletter": "Updates",
    // "privacy-policy": "Legal",
    // "holiday-homework": "Academics",
    // "faqs": "Help",
  };

  return (
    <>
      <Breadcrumb pageName={pageTitle} />
      <section className="container my-10 p-6 bg-white rounded-md">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex flex-wrap w-full">
            {/* ✅ Dono Mappings Ka Use Ek Sath */}
            <div className={menuMap[section as string] ? "md:w-9/12 w-full" : "md:w-12/12 w-full"}>
                <DynamicSection
                    type={`cms?type=${breadcrumbMap[section as string] || "Default"}`}
                    title=""
                    layout="cms"
                    sublayout="subcms"
                />
            </div>

            {/* ✅ Agar Menu Data Available Hai, Tabhi Show Karo */}
            {menuMap[section as string] && (
            <div className="md:w-3/12 w-full">
              <DynamicSection 
                type={`menu?type=${menuMap[section as string] || "Default"}`}
                title="" 
                layout="cms" 
                sublayout="submenu" 
              />
            </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionPage;