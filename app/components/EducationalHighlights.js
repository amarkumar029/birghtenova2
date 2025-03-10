"use client";
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import Image from "next/image";

// const tabs = [
//   {
//     id: "hallmark",
//     title: "HALLMARK",
//     content: {
//       heading: "Joy of Learning",
//       description:
//         "Restores what Tagore called the hallmark of childhood - ‘joy of learning’ and the ‘creative spirit’",
//       points: [
//         "Fosters Curiosity and Creativity: Encourages children to explore, imagine, and express themselves, igniting a lifelong love for knowledge and self-expression.",
//         "Promotes a Positive Learning Environment: Focuses on the process of learning, making education engaging, enjoyable, and fulfilling, while respecting each child's unique pace and individuality.",
//       ],
//       image: "/images/joy_of_learning_11zon.webp", // ✅ Fixed path
//     },
//   },
//   {
//     id: "centered",
//     title: "CENTERED",
//     content: {
//       heading: "Constructivist",
//       description: "Adopts a constructivist student-centered approach",
//       points: [
//         "Encourages Active Learning: Students engage in hands-on activities, problem-solving, and critical thinking, building their understanding through real-world experiences.",
//         "Promotes Collaborative Learning: Focuses on group work and discussions, allowing students to share ideas, challenge each other, and learn from diverse perspectives.",
//       ],
//       image: "/images/contructive_11zon.webp", // ✅ Fixed path
//     },
//   },
//   {
//     id: "character",
//     title: "CHARACTER",
//     content: {
//       heading: "Uniqueness",
//       description:
//         "Focuses on the uniqueness of each child and fosters holistic development",
//       points: [
//         "Personalized Learning Journey: Recognizes and nurtures the individual strengths, interests, and talents of each child, enabling them to reach their full potential.",
//         "Holistic Growth: Promotes the development of emotional, social, physical, and intellectual skills, ensuring a well-rounded and balanced education.",
//       ],
//       image: "/images/uniqeness_11zon.webp", // ✅ Fixed path
//     },
//   },
// ];

const EducationalHighlights = () => {
  const [activeTab, setActiveTab] = useState(null); // Initially null
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${baseUrl}/highlights`);
      const jsonData = await res.json();
      setData(jsonData);

      // ✅ Set default active tab to the first item in data
      if (jsonData.length > 0) {
        setActiveTab(jsonData[0].id);
      }
    }
    fetchData();
  }, []);

  // ✅ Prevent errors when `data` is still loading
  const activeContent = data.find((tab) => tab.id === activeTab);

  return (
    <section className="container">
      <div className="w-full p-6 bg-white">
        <h2 className="text-3xl font-bold text-center">Key Educational Highlights</h2>
        <p className="text-center text-gray-600">
          Explore the innovative features that enhance learning experiences.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-4">
          {data.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 mx-2 rounded-md font-semibold ${
                activeTab === tab.id ? "bg-[#283148] text-white" : "bg-[#86796A] text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Section - Only Render When Data is Available */}
        {activeContent && (
          <div className="mt-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              {/* <h3 className="text-2xl font-bold">{activeContent.heading}</h3>
              <p className="mt-2 text-gray-600">{activeContent.description}</p>
              <ul className="mt-4 space-y-2">
                {activeContent.points?.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 text-lg mr-2">✔</span>
                    {point}
                  </li>
                ))}
              </ul> */}
              <div dangerouslySetInnerHTML={{ __html: activeContent.content}}></div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                width={300}
                height={400}
                priority // Ensures fast loading
                className="rounded-md shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationalHighlights;