import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Certifications />
      <Work />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
