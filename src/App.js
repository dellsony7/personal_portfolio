import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Certifications />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
