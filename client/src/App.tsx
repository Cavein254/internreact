import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Subscribe from "./components/subscribe/Subscribe";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonial/Testimonials";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
