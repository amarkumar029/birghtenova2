"use client";
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import Image from "next/image";
import Link from "next/link";
import { 
  // FaAward, FaShieldAlt, FaMapMarkerAlt, 
  // FaRegEnvelope, FaPhone, 
  FaAngleRight 
} from "react-icons/fa";
// import { AiOutlineCheckCircle, AiFillSun } from "react-icons/ai";

// 🔄 Icon Mapping Object
// const iconMap = {
//   FaAward: FaAward,
//   FaShieldAlt: FaShieldAlt,
//   AiOutlineCheckCircle: AiOutlineCheckCircle,
//   AiFillSun: AiFillSun,
//   FaMapMarkerAlt: FaMapMarkerAlt,
//   FaRegEnvelope: FaRegEnvelope,
//   FaPhone: FaPhone,
// };

const DynamicSection = ({ type, layout, sublayout }) => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // For FAQ toggle

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}/${type}`);
        const jsonData = await res.json();
        setData(jsonData);

        // Set first tab active if layout is 'tabs'
        if (jsonData.length > 0 && layout === "tabs") {
          setActiveTab(jsonData[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [type]);

  const activeContent = data.find((tab) => tab.id === activeTab);

  // FAQ Toggle Handler
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Grid Layout */}
      {layout === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center bg-[#a18b6a]">
          {data.map((item) => {
            // const IconComponent = iconMap[item.image];
            return (
              <div 
                key={item.id}
                style={{ backgroundColor: item.other }}
                className="text-white py-20 px-4 transition-all duration-300 ease-in-out transform hover:mt-[-20px] group"
              >
                {/* {IconComponent && <IconComponent className="inline-block mb-4" size={100} />} */}
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.image || "default-image"} 
                    width={98} 
                    height={100} 
                    priority
                    className="inline-block"
                  />
                ) : (
                  <span>No Image</span>
                )}
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
            );
          })}
        </div>
      )}

      {/* Left-Aligned CMS Content */}
      {layout === "cms" && (
        <>
          {sublayout === "subcms" && (
            data.map((item, index) => (
              <div className="px-8 text-justify" key={index}>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </div>
            ))
          )}

          {sublayout === "submenu" && (
            <>
              <h3 className="widget-title-v2"><strong>In This Section...</strong></h3>
              <ul className="rounded-lg shadow-md">
                {data.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link || "#"} 
                      className="flex items-center text-gray-700 hover:text-red-500 transition-all duration-200 p-3 border-b"
                    >
                      <FaAngleRight className="text-gray-500 mr-2" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}

      {/* List Layout */}
      {layout === "list" && (
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {data.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-gray-50 w-80">
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          ))}
        </div>
      )}

      {/* Tabs Layout */}
      {layout === "tabs" && (
        <div>
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

          {activeContent && (
            <div className="mt-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <div dangerouslySetInnerHTML={{ __html: activeContent.content }}></div>
              </div>
              {activeContent.image && (
                <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
                  <Image
                    src={activeContent.image}
                    alt={activeContent.title}
                    width={300}
                    height={400}
                    priority
                    className="rounded-md shadow-lg w-full max-w-md"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Numbers Layout */}
      {layout === "numbers" && (
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {data.map((item, index) => (
            <div key={index} className="w-full py-8 px-6 text-white text-center">
              <div className="flex justify-center mb-4">
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.image || "default-image"} 
                    width={148} 
                    height={148} 
                    priority
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          ))}
        </div>
      )}

      {/* FAQ Layout */}
      {layout === "faq" && (
        <section className="container">
          <div className="bg-white px-6 py-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold">Have a question? <br /> Check out the FAQ</h2>
                <div className="mt-4">
                  <svg
                    className="faq-arrow" // Tailwind color
                    width="200"
                    height="211"
                    viewBox="0 0 200 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="md:w-1/2 w-full">
                {data.length === 0 ? (
                  <p className="text-center text-gray-500">Loading...</p>
                ) : (
                  data.map((faq, index) => (
                    <div key={index} className="mb-3">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center px-6 py-4 bg-[#283148] text-white font-medium text-left rounded-lg focus:outline-none transition-all"
                      >
                        {faq.other}
                        <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                      </button>
                      {openIndex === index && (
                        <div className="bg-gray-100 p-4 rounded-b-lg">
                          <div dangerouslySetInnerHTML={{ __html: faq.content}}></div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Facility Layout */}
      {layout === "facility" && (
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.image}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-justify">
                <div dangerouslySetInnerHTML={{ __html: item.content}}></div>
                {item.other ? (
                  <a
                    href={item.other}
                    className="flex items-center mt-4 text-blue-600 hover:underline text-sm"
                  >
                    📖 Read More
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DynamicSection;