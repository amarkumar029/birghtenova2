// "use client";
// import { useState, useEffect } from "react";
// import baseUrl from "../../navigation/base";

// // const faqs = [
// //   {
// //     question: "Can existing school owners apply for a franchise of Birla Open Minds?",
// //     answer: "Yes, existing school owners can indeed apply for a franchise of Birla Open Minds. Birla Open Minds, with a legacy of 100 years, is a renowned institution known for its unwavering commitment to academic excellence and the provision of high-quality education. Aspiring entrepreneurs in the realm of education franchising seeking a distinguished partner to establish a successful K-12 school or preschool need look no further. The process for applying for a franchise involves: Fill out the franchise enquiry form: Express your interest through our form. The Birla Open Minds team will connect within 48 hours: Our team will promptly contact you for further discussions. KYC Check: A Know Your Customer (KYC) check will be conducted for authenticity. Face-to-face meeting & franchise setup: Finalizing the franchise setup in a personal meeting. With expertise and dedication at its core, Birla Open Minds stands as an exemplar in the field of education, making it an ideal choice for existing school owners looking to join forces with a prestigious educational institution.",
// //   },
// //   {
// //     question: "What are the benefits of joining Birla Open Minds as a franchise partner?",
// //     answer: "As a franchise partner, you receive access to a well-structured curriculum, teacher training, operational support, and branding to establish a quality educational institution.",
// //   },
// //   {
// //     question: "What type of franchises are you offering?",
// //     answer: "We offer different types of franchise models, including preschools, K-12 schools, and specialized education programs.",
// //   },
// //   {
// //     question: "What are the space and facility requirements for each franchise location?",
// //     answer: "The space requirements depend on the type of franchise. Preschools typically require a minimum of 3,000 sq. ft., while K-12 schools require larger campuses.",
// //   },
// //   {
// //     question: "What kind of training and support is provided?",
// //     answer: "We provide extensive training programs for teachers, administrators, and staff to ensure high-quality education standards.",
// //   },
// //   {
// //     question: "What will be the core curriculum offered in your school?",
// //     answer: "Our curriculum is designed to provide a balanced education, incorporating academic excellence, extracurricular activities, and skill-based learning.",
// //   },
// // ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const [data, setData] = useState([]);
  
//     useEffect(() => {
//       async function fetchData() {
//         const res = await fetch(`${baseUrl}/team?type=Faq`);
//         const jsonData = await res.json();
//         setData(jsonData);
//       }
//       fetchData();
//     }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="container">
//       <div className="bg-white px-6 py-10">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2">
//             <h2 className="text-4xl font-bold">
//               Have a question? <br /> Check out the FAQ
//             </h2>
//             <div className="mt-4">
//               <svg
//                 className="faq-arrow" // Tailwind color
//                 width="200"
//                 height="211"
//                 viewBox="0 0 200 211"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </div>
//           </div>

//           <div className="md:w-1/2 w-full">
//             {faqs.map((faq, index) => (
//               <div key={index} className="mb-3">
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex justify-between items-center px-6 py-4 bg-dark text-white font-medium text-left rounded-lg focus:outline-none transition-all"
//                 >
//                   {faq.question}
//                   <span className="text-2xl">
//                     {openIndex === index ? "−" : "+"}
//                   </span>
//                 </button>
//                 {openIndex === index && (
//                   <div className="bg-gray-100 p-4 rounded-b-lg">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;


"use client";
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [data, setData] = useState([]); // Single state declaration

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}/team?type=Faq`);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    }
    fetchData();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container">
      <div className="bg-white px-6 py-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold">
              Have a question? <br /> Check out the FAQ
            </h2>
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

          {/* ✅ Render only when data is available */}
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
                    <span className="text-2xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
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
  );
};

export default FAQ;