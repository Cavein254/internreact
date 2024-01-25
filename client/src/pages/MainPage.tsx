import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonial/Testimonials";
import Team from "../components/team/Team";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default MainPage;