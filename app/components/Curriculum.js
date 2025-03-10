// "use client"
// import { useState, useEffect } from "react";
// import baseUrl from "../../navigation/base";
// import { FaAward, FaShieldAlt } from "react-icons/fa";
// import { AiOutlineCheckCircle, AiFillSun } from "react-icons/ai";

// const CurriculumSection = () => {
//   // const curriculumData = [
//   //   {
//   //     title: "Pre-Primary Years Curriculum",
//   //     description:
//   //       "Our curriculum is rooted in neuroscience research, ensuring a developmentally appropriate and integrated learning experience.",
//   //     icon: <FaAward size={45} />,
//   //     bgColor: "bg-[#86796A]",
//   //   },
//   //   {
//   //     title: "Primary Years Curriculum",
//   //     description:
//   //       "Designed to cater to individual needs, our curriculum aligns with students' interests, abilities, and diverse learning styles.",
//   //     icon: <AiOutlineCheckCircle size={45} />,
//   //     bgColor: "bg-[#A67B5B]",
//   //   },
//   //   {
//   //     title: "Middle Years Curriculum",
//   //     description:
//   //       "We seamlessly integrate multiple curriculum boards, offering a unique and cohesive academic framework.",
//   //     icon: <AiFillSun size={45} />,
//   //     bgColor: "bg-[#C1876B]",
//   //   },
//   //   {
//   //     title: "High School Curriculum",
//   //     description:
//   //       "Students can choose from Indian boards like CBSE and CISCE or pursue global pathways with Cambridge and IB programmes.",
//   //     icon: <FaShieldAlt size={45} />,
//   //     bgColor: "bg-[#E6AA68]",
//   //   },
//   // ];
//   const [data, setData] = useState([]);
      
//   useEffect(() => {
//   async function fetchData() {
//     const res = await fetch(`${baseUrl}/team?type=Curriculum`);
//     const data = await res.json();
//     setData(data);
//   }
//   fetchData();
//   }, []);

//   return (
//     <section className="py-12 bg-gray-100 text-left">
//       <div className="text-center mb-2">
//         <h2 className="text-3xl font-bold">Our Curriculum</h2>
//         <div className="title-border"></div>
//       </div>
//       {/* <div className="flex flex-wrap justify-center gap-6 px-4"> */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className={`${item.other} text-white py-8 px-6 rounded-lg shadow-lg`}
//           >
//             <div className="flex justify-left mb-4 text-white"><{item.image} size={45} /></div>
//             {/* <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//             <p className="text-sm">{item.description}</p> */}
//             <div dangerouslySetInnerHTML={{ __html: item.content}}></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CurriculumSection;


"use client";
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import { FaAward, FaShieldAlt } from "react-icons/fa";
import { AiOutlineCheckCircle, AiFillSun } from "react-icons/ai";

// 🔄 Icon Mapping Object
const iconMap = {
  FaAward: FaAward,
  FaShieldAlt: FaShieldAlt,
  AiOutlineCheckCircle: AiOutlineCheckCircle,
  AiFillSun: AiFillSun,
};

const CurriculumSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${baseUrl}/team?type=Curriculum`);
      const jsonData = await res.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <section className="py-12 bg-gray-100 text-left">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold">Our Curriculum</h2>
        <div className="title-border"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {data.map((item) => {
          const IconComponent = iconMap[item.image]; // ✅ Ensure correct field name

          return (
            <div
              key={item.id}
              className={`${item.other} text-white py-8 px-6 rounded-lg shadow-lg`}
            >
              {/* ✅ Render Icon Only If It Exists */}
              <div className="flex justify-left mb-4 text-white">
                {IconComponent ? <IconComponent size={45} /> : <p>Icon Not Found</p>}
              </div>

              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CurriculumSection;