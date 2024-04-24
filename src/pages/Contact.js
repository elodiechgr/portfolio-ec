import React from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <AboutHero />
      <Header />
      <Form />
      <ContactForm />
    </div>
  );
};

export default Contact;
