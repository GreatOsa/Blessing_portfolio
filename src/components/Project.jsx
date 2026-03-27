import React from "react";

export default function Project() {
  return (
    <section id="project" className="project">
      <h2 className="section-title">Recent Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <img
            src={`${import.meta.env.BASE_URL}assets/${"hotel.png"}`}
            // src="/assets/hotel.png"
            alt=""
          />
          <h3>Hostel Website</h3>
          <p>
            The hotel website was crafted to capture the feeling of comfort,
            luxury, and ease from the moment a visitor arrives.
          </p>
          <div className="btn-group">
            <div className="btn">
              <a href="https://grand-hotel-six.vercel.app">Live Demo</a>
            </div>
            <div className="btn">
              <a href="https://github.com/GreatOsa/Grand-hotel">Github Repo</a>{" "}
            </div>
          </div>
        </div>
        <div className="project-card">
          <img
            src={`${import.meta.env.BASE_URL}assets/${"robot.PNG"}`}
            alt=""
          />
          <h3>Ufactory-xarm-uf850-Robot</h3>
          <p>
            This project focused on configuring and calibrating the UFactory
            xArm UF850, a six-axis robotic arm designed for high-precision
            automation.
          </p>
          <div className="btn-group">
            {/* <div className="btn">Live Demo</div> */}
            <div className="btn">
              <a href="https://github.com/GreatOsa/Ufactory-xarm-uf850-Robot">
                Github Repo
              </a>
            </div>
          </div>
        </div>
        {/* <div className="project-card">
          <img src="/public/assets/hotel.png" alt="" />
          <h3>Hostel Website Demo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic
          </p>
          <div className="btn-group">
            <div className="btn">Live Demo</div>
            <div className="btn">Github Repo</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
