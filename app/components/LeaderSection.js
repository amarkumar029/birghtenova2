"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import Image from "next/image";

const LeaderSection = () => {
  const [leaderMembers, setLeaderMembers] = useState([]);

  useEffect(() => {
    async function fetchLeaderData() {
      const res = await fetch(`${baseUrl}/team?type=leader`);
      const data = await res.json();
      setLeaderMembers(data);
    }
    fetchLeaderData();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold mb-1">The Minds Behind Open Minds</h2>
        <h5 className="text-2xl font-bold">Visionary Leaders</h5>
        <div className="title-border"></div>
      </div>
      <div className="flex justify-center gap-6">
        {leaderMembers.map((member, index) => (
          <div key={index} className="w-60 text-center">
            <Image
              src={member.image}
              width={300}
              height={400}
              alt={member.image}
              className="w-32 mx-auto mb-4"
            />
            <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
            {/* <h3 className="text-xl font-semibold">{member.name}</h3> */}
            {/* <p className="text-gray-600">{member.role}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderSection;