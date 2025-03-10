"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import Image from "next/image";

const HeroSection = () => {
  const [aboutHero, setAboutHero] = useState([]);
  
  useEffect(() => {
    async function fetchAboutHeroData() {
      const res = await fetch(`${baseUrl}/team?type=About Hero`);
      const data = await res.json();
      setAboutHero(data);
    }
    fetchAboutHeroData();
  }, []);

  return (
    <section className="relative bg-gray-100 py-16">
      {aboutHero.map((member, index) => (
      <div key={index} className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* <h1 className="text-4xl font-bold mb-4">
            Empowering Minds &amp; Enriching Future Leaders
          </h1>
          <p className="text-gray-700 mb-6">
            At <strong>Birla Open Minds</strong>, we are committed to:
          </p>
          <ul className="text-gray-700 mb-6">
            <li>
              <strong>Holistic Education:</strong> Empowering young minds to thrive academically and
              personally.
            </li>
            <li>
              <strong>Nationwide Presence:</strong> 240+ Institutions across 23 states and 115+ cities in India.
            </li>
            <li>
              <strong>Shaping the Future:</strong> Inspiring the next generation of leaders, thinkers, and
              innovators.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            Join us in building a brighter tomorrow, one mind at a time!
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <Image
            src={member.image}  // ✅ Use absolute path in `public/`
            alt={member.image}
            width={500}  // ✅ Set width and height
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      ))}
    </section>
  );
};

export default HeroSection;