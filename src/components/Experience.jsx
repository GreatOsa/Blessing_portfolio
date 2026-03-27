import React from "react";
import { BsLaptop } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-info">
        <div className="grid">
          <div className="grid-card">
            <FaChartArea className="icon" />
            <span>Data Analysis</span>
            <h3>1 Years</h3>
            <p>
              Proficient in SQL, Power BI, and Excel for data extraction,
              analysis, and visualization. Experienced in building dashboards,
              generating reports, and transforming data into actionable insights
              to support business decision-making.
            </p>
          </div>
          <div className="grid-card">
            <BsLaptop className="icon" />
            <span>Audit Trainee</span>
            <h3>6 months</h3>
            <p>
              Detail-oriented Audit Trainee with foundational knowledge in
              financial reporting, compliance, and internal controls.
              Experienced in supporting audit processes, reviewing financial
              records, and ensuring accuracy and adherence to regulatory
              standards.
            </p>
          </div>
          <div className="grid-card">
            <BsLaptop className="icon" />
            <span>Content Writing</span>
            <h3>2 Years</h3>
            <p>
              Skilled content writer with experience creating clear, engaging,
              and audience-focused content across various platforms.{" "}
            </p>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}assets/${"Blessing.jpg"}`}
          alt=""
        />
      </div>
    </section>
  );
}
