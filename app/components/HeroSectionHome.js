"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
// import VideoComponent from "./VideoComponent";
import Image from "next/image";
import WaveSVG from "./WaveSVG";

const HeroSection = () => {
  const [homeHero, setHomeHero] = useState([]);
  
  useEffect(() => {
    async function fetchHomeHeroData() {
      const res = await fetch(`${baseUrl}/team?type=Home Hero`);
      const data = await res.json();
      setHomeHero(data);
    }
    fetchHomeHeroData();
  }, []);

  return (
    // lg:mt-[90px]
    <section className="relative">
      {homeHero.map((member, index) => (
      <div key={index} className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
          {/* <h1 className="text-4xl font-bold mb-4">Empowering Minds, Inspiring Futures</h1>
          <p className="text-gray-700 mb-6">Unlocking Potential Through Innovative Education Nurturing Growth and Lifelong Learning.</p> */}
        </div>
        <div className="md:w-1/2">
          {/* <img src="./aboutusimage2.jpg" alt="Hero" className="rounded-lg shadow-lg" /> */}
          {/* <VideoComponent /> */}
          <div className="w-full flex justify-center p-4">
            <Image
              src={member.image}  // ✅ Use absolute path in `public/`
              alt={member.image}
              width={500}  // ✅ Set width and height
              height={350}
              className="rounded-lg shadow-lg"
            />
            {/* <video 
              className="w-full rounded-2xl shadow-lg" 
              preload="auto" 
              loop 
              autoPlay 
              muted 
              playsInline 
              controls
            >
              <source 
                src={member.other}
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </div>
      ))}
      <WaveSVG />
    </section>
  );
};
  
export default HeroSection;  