// ✅ Different sections ke liye DynamicSection ko reuse karna
import DynamicSection from "./components/DynamicSection";
import SlickSlider from "./components/SlickSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brightenova International School Barbigha",
  description: "Brightenova International School Barbigha is a group of top schools in India offering comprehensive learning solutions for young minds right from their formative years to grade 12.",
  keywords: "chain of schools in bangalore, education franchise opportunities",
  // other metadata
};

const Page = () => {
  return (
    <div>
      <SlickSlider />
      <section 
        style={{
          backgroundImage: "url('/bg.jpg')", 
          backgroundAttachment: "fixed", 
          backgroundSize: "cover"
        }}
      >
        <div className="container py-16">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-white">The Numbers Say It All</h2>
            <div className="title-border-white"></div>
          </div>
          <DynamicSection type="cms?type=Numbers" layout="numbers" />
        </div>
      </section>
      <DynamicSection type="cms?type=Service" layout="grid" />
      <section className="py-16 bg-gray-100 rounded-md">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold">OUR SCHOOL FACILITIES</h2>
          <div className="title-border"></div>
        </div>
        <DynamicSection type="cms?type=Facility" layout="facility" />
      </section>
      <section className="py-16 bg-white rounded-md">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold">Latest Brightenova International School Barbigha</h2>
          <div className="title-border"></div>
        </div>
        <DynamicSection type="cms?type=Latest" layout="facility" />
      </section>
    </div>
  );
};

export default Page;