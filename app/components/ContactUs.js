"use client"
import { useState, useEffect } from "react";
import baseUrl from "../../navigation/base";
import { FaMapMarkerAlt, FaRegEnvelope, FaPhone } from "react-icons/fa";
import MapEmbed from "./MapEmbed";

const Contact = () => {
  const [contact, setContact] = useState([]);
        
  useEffect(() => {
  async function fetchContact() {
    const res = await fetch(`${baseUrl}/contact`);
    const contact = await res.json();
    setContact(contact);
  }
  fetchContact();
  }, []);
    
  return (
    <section className="my-10">
      <div className="container">
        <p className="mb-1 text-1xl">
          <FaMapMarkerAlt style={{ display: "inline-block" }} /> {contact[0]?.address}
        </p>
        <p className="mb-1 text-1xl">
          <FaRegEnvelope style={{ display: "inline-block" }} /> {contact[0]?.email}
        </p>
        <p className="mb-16 text-1xl">
          <FaPhone style={{ display: "inline-block" }} /> {contact[0]?.phone}
        </p>
        <MapEmbed />
      </div>
    </section>
  );
};

export default Contact;