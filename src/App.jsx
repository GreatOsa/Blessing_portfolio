import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Experience />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </div>
  );
}
