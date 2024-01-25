import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Subscribe from "./components/subscribe/Subscribe";
import Testimonials from "./components/testimonial/Testimonials";

function App() {
  return (
    <>
      <div>
        <About />
        <Services />
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
