import React, { useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function Navbar() {
  const about = useRef();
  const projects = useRef();
  const contact = useRef();
  const skill = useRef();
  const scrollhandler = (eleref) => {
    console.log(eleref);
    // window.scrollTo({ top: eleref.current.offsetTop, behavior: "smooth" });
  };

  const [activeComponent, setActiveComponent] = useState("Home");

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="#">
          <b>Sushant</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "red", border: "1px solid white" }}
                href="https://lime-joye-58.tiiny.site"
                download="Sushant_Resume.pdf"
                target="_blank"
              >
                <b>Resume/CV</b>{" "}
                <span>
                  <FaCloudDownloadAlt />
                </span>
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeComponent === "Home" ? "active" : ""
                }`}
                onClick={() => {
                  handleComponentClick("Home");
                }}
                to="#"
              >
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeComponent === "About" ? "active" : ""
                }`}
                to="#about"
                smooth
                onClick={() => {
                  handleComponentClick("About");
                  scrollhandler(about);
                }}
              >
                <b>About</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeComponent === "skill" ? "active" : ""
                }`}
                to="#skill"
                smooth
                onClick={() => {
                  handleComponentClick("skill");
                  scrollhandler(skill);
                }}
              >
                <b>Skill</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeComponent === "Projects" ? "active" : ""
                }`}
                to="#projects"
                smooth
                onClick={() => {
                  handleComponentClick("Projects");
                }}
              >
                <b>Projects</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeComponent === "Contact" ? "active" : ""
                }`}
                to="#contact"
                smooth
                onClick={() => {
                  handleComponentClick("Contact");
                }}
              >
                <b>Contact</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
