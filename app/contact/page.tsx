import ContactUs from "../components/ContactUs";
import Breadcrumb from "../components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Brightenova International School Barbigha",
  description: "Brightenova International School Barbigha is a group of top schools in India offering comprehensive learning solutions for young minds right from their formative years to grade 12.",
  keywords: "chain of schools in bangalore, education franchise opportunities",
  // other metadata
};

const Contact = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Us" />
      <ContactUs />
    </>
  );
};

export default Contact;