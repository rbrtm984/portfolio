import Image from "next/image";
import path from "path";
// import Navbar from "./components/navbar.jsx";
import Main from "./components/main.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
// import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

export default function Home() {
  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
