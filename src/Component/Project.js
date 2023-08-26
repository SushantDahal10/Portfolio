import React from "react";
import ecommerce from "../images/ecommerceapplaptop.png";
import mobile from "../images/mobiledata.png";
import blackjack from "../images/blackjackgame.png";
import reduxtoolkit from "../images/reduxtoolkit.png";

export default function About() {
  return (
    <div className="container" id="projects">
      <h1 className="fs-1 fw-bold text-center my-4">Projects</h1>

      {/* Ecommerce App */}
      <div className="row my-4">
        <div className="col-lg-6">
          <div className="shadow-lg p-5 bg-body">
            <h2 className="fs-4 fw-bold">Ecommerce App</h2>
            <p className="fs-6">
              made using Html5, CSS, Tailwind & Bootstrap, ReactJS, Express,
              MongoDb, Mongoose
              <br />
              <span className="fs-5" style={{ color: "red" }}>
                (may take some time to fetch data)
              </span>
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="https://laptopstorenepal.onrender.com"
                target="_blank"
                className="me-2"
              >
                <button type="button" className="btn btn-primary btn-sm my-2">
                  Demo &rarr;
                </button>
              </a>
              <a
                href="https://github.com/SushantDahal10/Ecommerce"
                target="_blank"
              >
                <button type="button" className="btn btn-primary btn-sm my-2">
                  Source code &rarr;
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="shadow p-3 bg-white rounded border border-white rounded-top">
            <div className="image-container">
              <img
                src={ecommerce}
                className="border rounded img-fluid"
                alt="Ecommerce App"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Info */}
      <div className="row my-4">
        <div className="col-lg-6">
          <div className="shadow-lg p-5 bg-body">
            <h2 className="fs-4 fw-bold">Mobile Info</h2>
            <p className="fs-6">
              made using Html5, Css, Javascript<br></br>
              <span className="fs-5" style={{ color: "red" }}>
                (may not be responive to all devices)
              </span>
            </p>

            <div className="d-flex justify-content-center">
              <a
                href="https://sushantdahal10.github.io/newmobile/"
                target="_blank"
                className="me-2"
              >
                <button type="button" className="btn btn-primary btn-sm my-2">
                  Demo &rarr;
                </button>
              </a>
              <a
                href="https://github.com/SushantDahal10/mobile"
                target="_blank"
              >
                <button type="button" className="btn btn-primary btn-sm my-2">
                  Source code &rarr;
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="shadow p-3 bg-white rounded border border-white rounded-top">
            <div className="image-container">
              <img
                src={mobile}
                className="border rounded img-fluid"
                alt="Mobile Info"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Functionable Cart */}
      <div className="row my-4">
        <div className="col-lg-6">
          <div className="shadow-lg p-5 bg-body">
            <h2 className="fs-4 fw-bold">Functionable Cart</h2>
            <p className="fs-6">
              made using Html5, Css, Bootstrap, Javascript, ReactJs
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="https://sushantdahal10.github.io/reduxtoolkitwebsite/"
                target="_blank"
                className="me-2"
              >
                <button type="button" className="btn btn-primary btn-sm my-2">
                  Demo &rarr;
                </button>
              </a>
              <a
                href="https://github.com/SushantDahal10/reduxtoolkitwebsite"
                target="_blank"
              >
                <button type="button" className="btn btn-primary btn-sm my-2">
                  Source code &rarr;
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="shadow p-3 bg-white rounded border border-white rounded-top">
            <div className="image-container">
              <img
                src={reduxtoolkit}
                className="border rounded img-fluid"
                alt="Functionable Cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
