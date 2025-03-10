"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import Image from "next/image";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    async function fetchTeamData() {
      const res = await fetch(`${baseUrl}/team?type=teams`);
      const data = await res.json();
      setTeamMembers(data);
    }
    fetchTeamData();
  }, []);

  return (
    <section className="container">
      <div className="py-16 bg-white text-center">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold">The Driving Force</h2>
          <div className="title-border"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.image} 
                  width={128} height={128}
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;