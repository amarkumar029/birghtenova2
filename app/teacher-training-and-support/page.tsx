// This file can stay on the server-side since metadata is part of server-side rendering
import { Metadata } from "next";
import Breadcrumb from "../components/Common/Breadcrumb";
import Content from "../components/Content";

// Define metadata at the page level outside the component
export const metadata: Metadata = {
  title: "Teacher Training and Support | Brightenova International School Barbigha",
  description: "Brightenova International School Barbigha is a group of top schools in India offering comprehensive learning solutions for young minds right from their formative years to grade 12.",
  keywords: "chain of schools in bangalore, education franchise opportunities",
  // other metadata
};

// The component itself can remain marked as "use client"
const GenralPage = () => {

  return (
    <>
      <Breadcrumb pageName="Teacher Training and Support" />
      <Content />
    </>
  );
};

export default GenralPage;