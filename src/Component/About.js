import React from "react";
import image from "../images/image.jpg";

export default function About() {
  return (
    <div className="container" id="about">
      <div className="shadow-lg p-4 bg-body px-3">
        <div className="row align-items-center gap-5">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div
              className="bg-white rounded"
              style={{ height: "100%", maxWidth: "100%", overflow: "hidden" }}
            >
              <img
                src={image}
                className="img-fluid border rounded px-3"
                alt="Cinque Terre"
                style={{
                  height: "auto",
                  width: "100%",
                  maxHeight: "300px", // Adjust this value as needed
                }}
              />
            </div>
          </div>
          <div className="col-md-5 col-12">
            <h1 className="fs-2 fw-bold">about me</h1>
            <p className="fs-5">
              Hello there! I'm a second-year computer science student with a
              passion for web development, artificial intelligence (AI), and
              data structures and algorithms (DSA). I believe that technology
              has the power to transform the world, and I'm excited to be a part
              of this dynamic field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
