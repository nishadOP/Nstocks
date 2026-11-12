import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-3  border-top">
          <h1 className=" text-center ">People</h1>
        </div>
        <div
          className="row p-3 mt-5  text-muted "
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-3 text-center">
            <img
              src="media/images/me.jpg"
              style={{ width: "50%", borderRadius: "100%" }}
            ></img>
            <h4 className="mt-5">Nishad Javed Haque</h4>
            <h6>Devloper,coder</h6>
          </div>

          <div className="col-6 p-3 fs-5">
            <p>
              Nishad bootstrapped and built this Zerodha clone project from
              scratch using the MERN stack, driven by a passion for clean code
              and real-world problem solving. A BCA graduate with a sharp eye
              for modular architecture and intuitive UI, Nishad blends technical
              precision with creative flair.
            </p>
            <p>
              This project is a tribute to the transformative impact of
              platforms like Zerodha on India's trading ecosystem—and a showcase
              of what one determined developer can build solo.
            </p>
            <p>
              💻 Built with: MongoDB, Express.js, React.js, Node.js 🛠️ Features:
              Real-time data simulation, user authentication, dashboard UI, and
              more 🎯 Goal: To replicate core functionalities of Zerodha while
              adding personal touches and learning deeply Basketball might be
              Nithin’s zen, but for Nishad, it’s debugging and deploying.
            </p>
            <p>
              Connect with Nishad on:{" "}
              <a href="" style={{ textDecoration: "none" }}>
                🌐 Homepage
              </a>{" "}
              |{" "}
              <a href="" style={{ textDecoration: "none" }}>
                💬 TradingQnA
              </a>{" "}
              |{" "}
              <a href="" style={{ textDecoration: "none" }}>
                🐦 Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
