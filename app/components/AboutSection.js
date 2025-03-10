"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";

const AboutSection = () => {
  const [vision, setVision] = useState([]);
    
  useEffect(() => {
    async function fetchVisionData() {
      const res = await fetch(`${baseUrl}/team?type=Vision`);
      const data = await res.json();
      setVision(data);
    }
    fetchVisionData();
  }, []);

  const [mission, setMission] = useState([]);
    
  useEffect(() => {
    async function fetchMissionData() {
      const res = await fetch(`${baseUrl}/team?type=Mission`);
      const data = await res.json();
      setMission(data);
    }
    fetchMissionData();
  }, []);
  
  return (
    <section className="py-16 bg-white text-center">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold">Our Purpose and Commitment</h2>
        <div className="title-border"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {vision.map((member, index) => (
        <div key={index} className="p-6 border rounded-lg shadow-md bg-gray-50 w-80">
          {/* <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p>We strive to create a knowledge-driven society with empowered individuals.</p> */}
          <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
        </div>
        ))}
        {mission.map((member, index) => (
        <div key={index} className="p-6 border rounded-lg shadow-md bg-gray-50 w-80">
          <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
          {/* <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p>Our mission is to provide quality education and develop future leaders.</p> */}
        </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;  