"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";

const JourneySection = () => {
    const [journey, setJourney] = useState([]);
    
    useEffect(() => {
    async function fetchJourneyData() {
        const res = await fetch(`${baseUrl}/team?type=Journey`);
        const data = await res.json();
        setJourney(data);
    }
    fetchJourneyData();
    }, []);

    // const timelineData = [
    //   { year: "2008", tags: "Establishment", description: "Our journey began in 2008 with the vision to transform education through innovation and excellence. Birla Open Minds Education Pvt Ltd was established to redefine learning experiences and set new benchmarks in the education sector." },
    //   { year: "2011", tags: "First Sign-Up", description: "A significant milestone was achieved in 2011 when we signed up our first school. This marked the beginning of our expansion, bringing our unique educational philosophy to students across the country." },
    //   { year: "2011-2016", tags: "18 New Schools", description: "Over the next five years, we steadily grew our presence, adding 18 new schools to our network. This period laid a strong foundation for our future expansions." },
    //   { year: "2016-2017", tags: "16 New Schools", description: "With our vision gaining momentum, we added 16 new schools in a single year, expanding our reach and bringing quality education to more students. " },
    //   { year: "2017-2018", tags: "16 New Schools", description: "Our commitment to educational excellence continued as we welcomed another 16 new schools into the Birla Open Minds family, strengthening our footprint across multiple regions." },
    //   { year: "2018-2019", tags: "35 New Schools", description: "This year marked an accelerated phase of growth with 35 new schools joining our network. The increasing trust of parents and educators in our approach propelled us to new heights." },
    // ];
  
    return (
        <section className="py-16 bg-gradient-to-r from-[#B79C6D] via-[#86796A] to-[#283148]">
            <div className="container mx-auto">
                <div className="text-center mb-2">
                    <h2 className="text-3xl font-bold text-white">Our Journey at a Glance</h2>
                    <div className="title-border-white"></div>
                </div>
                {/* Grid for 2-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                    {journey.map((member, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <div dangerouslySetInnerHTML={{ __html: member.content}}></div>
                        {/* <h1 className="text-xl font-bold">{item.year}</h1>
                        <h5>{item.tags}</h5>
                        <p className="text-gray-700">{item.description}</p> */}
                    </div>
                    ))}
                </div>
            </div>
        </section>      
    );
  };
  
  export default JourneySection;
  