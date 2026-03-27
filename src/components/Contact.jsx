import React from "react";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="input-box">
        <h2 className="section-title">Contact Me</h2>

        <div className="input">
          <p className="text">blessingodinaka832@gmail.com</p>
          {/* <input type="text" placeholder="johndoe@gmail.com" className="text" /> */}
          <BiEnvelope className="icon" />
        </div>
        <div className="input">
          <p className="text">08149972714</p>
          {/* <input type="text" placeholder="johndoe@gmail.com" className="text" /> */}
          <BiPhoneCall className="icon" />
        </div>
      </div>
    </section>
  );
}
