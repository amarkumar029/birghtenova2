"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import Image from "next/image";

const NationwidePresence = () => {
  // const data = [
  //   {
  //     id: 1,
  //     icon: "/icons/institution.svg", // Ensure this file exists in the public/icons folder
  //     value: "240+",
  //     title: "INSTITUTIONS",
  //     description:
  //       "A growing network of over 240+ educational institutions delivering excellence in education and shaping young minds across the nation.",
  //   },
  //   {
  //     id: 2,
  //     icon: "/icons/globe.svg",
  //     value: "115+",
  //     title: "CITIES",
  //     description:
  //       "Our presence spans across 115+ cities, making quality education accessible to communities in urban and rural areas alike.",
  //   },
  //   {
  //     id: 3,
  //     icon: "/icons/locations.svg",
  //     value: "23+",
  //     title: "STATES",
  //     description:
  //       "With a footprint in 23 states, we are committed to nurturing talent and inspiring learners across India.",
  //   },
  //   {
  //     id: 4,
  //     icon: "/icons/student.svg",
  //     value: "1,00,000+",
  //     title: "STUDENTS",
  //     description:
  //       "Empowering over 1,00,000 students with world-class education, holistic development, and lifelong learning opportunities.",
  //     gradient: true,
  //   },
  // ];
  const [data, setData] = useState([]);
      
  useEffect(() => {
  async function fetchData() {
      const res = await fetch(`${baseUrl}/team?type=Presence`);
      const data = await res.json();
      setData(data);
  }
  fetchData();
  }, []);

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold">Nationwide Presence</h2>
      <div className="title-border"></div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="py-8 px-6 rounded-xl shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B79C6D] hover:via-[#86796A] hover:to-[#283148] hover:text-white"
          >
            <div className="flex justify-center mb-4">
              <Image 
                src={item.image} 
                alt={item.image} 
                width={48} // Adjust as needed
                height={48} // Adjust as needed
                priority
              />
            </div>
            {/* <h3 className="text-2xl font-bold">{item.value}</h3>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="mt-2 text-sm">{item.description}</p> */}
            <div dangerouslySetInnerHTML={{ __html: item.content}}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NationwidePresence;