import Intro from "./pages/Intro";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="h-screen w-full  md:w-2/5 m-8 mx-auto sm:p-8">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
