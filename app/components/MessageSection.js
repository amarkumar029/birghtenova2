"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import Image from "next/image";

const MessageSection = () => {
  const [cMembers, setCmessage] = useState([]);
  const [dMembers, setDmessage] = useState([]);

  useEffect(() => {
    async function fetchCmessage() {
      const res = await fetch(`${baseUrl}/team?type=Chairmans Message`);
      const data = await res.json();
      setCmessage(data);
    }
    fetchCmessage();
  }, []);

  useEffect(() => {
    async function fetchDmessage() {
      const res = await fetch(`${baseUrl}/team?type=Directors Message`);
      const data = await res.json();
      setDmessage(data);
    }
    fetchDmessage();
  }, []);

  return (
    <>
      {/* Chairman's Message */}
      <section className="py-10 px-4 bg-white text-center">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold">Chairman&apos;s Message</h2>
          <div className="title-border"></div>
        </div>

        {cMembers.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-gradient-to-r from-[#B79C6D] via-[#86796A] to-[#283148] rounded-lg shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="md:w-1/3">
              <Image
                src={member.image} 
                alt={member.image}
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 p-6 text-left">
              <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
            </div>
          </div>
        ))}
      </section>

      {/* Managing Director's Message */}
      <section className="py-10 px-4 bg-white text-center">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold">Managing Director&apos;s Message</h2>
          <div className="title-border"></div>
        </div>

        {dMembers.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-gradient-to-r from-[#B79C6D] via-[#86796A] to-[#283148] rounded-lg shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="md:w-1/3">
              <Image
                src={member.image} 
                alt={member.image}
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 p-6 text-left">
              <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default MessageSection;