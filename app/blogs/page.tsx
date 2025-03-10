import Content from "../components/Content";
import Breadcrumb from "../components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Brightenova International School Barbigha",
  description: "Brightenova International School Barbigha is a group of top schools in India offering comprehensive learning solutions for young minds right from their formative years to grade 12.",
  keywords: "chain of schools in bangalore, education franchise opportunities",
  // other metadata
};

const GenralPage = () => {
  return (
    <>
      <Breadcrumb pageName="Blogs" />
      <Content />
    </>
  );
};

export default GenralPage;