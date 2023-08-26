import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Middle() {
  const [value, setValue] = useState("Web Developer");

  return (
    <div className="container my-5 py-5" id="home">
      <div className="row">
        <div className="col-md-12">
          <div className="shadow-lg p-4 mb-3 bg-body rounded rounded-pill text-center">
            <div className="vitrako">
              <p className="text-center">
                <strong className="fs-3" style={{ color: "black" }}>
                  I am{" "}
                  <strong className="fs-3" style={{ color: "red" }}>
                    Sushant
                  </strong>
                  ,<br />a{" "}
                  <strong className="fs-3" style={{ color: "blue" }}>
                    <Typewriter
                      words={[
                        " a 2nd Year CS Student",
                        "a 2nd Year CS Student",
                        "a 2nd Year CS Student",
                        " a 2nd Year CS Student",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </strong>
                </strong>
              </p>
            </div>
            {/* Additional content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
