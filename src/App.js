import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";

import Middle from "./Component/Middle";
import About from "./Component/About";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Skill from "./Component/Skill";
import React, { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const about = useRef();
  const projects = useRef();
  const contact = useRef();
  const scrollhandler = (eleref) => {
    console.log(eleref);
    //window.scrollTo{top:eleref.current.off,behavior:"smooth"};
  };

  return (
    <>
      <BrowserRouter>
        <div className="d-flex justify-content-between">
          <Navbar> </Navbar>
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Middle />
                  <About />
                  <Skill></Skill>
                  <Project />
                  <Contact />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About ref={about} />
                </>
              }
            />
            <Route
              path="/skill"
              element={
                <>
                  <Skill />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Project />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>

      <div className="container"></div>
    </>
  );
}

export default App;
