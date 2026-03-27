import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <a href="#" className="logo">
        <span>Blessing. O A</span>{" "}
      </a>

      <ul className={`nav-links ${toggle ? "active" : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <GiHamburgerMenu
        id="menu-icon"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <a href="https://www.linkedin.com/in/blessing-a-odinaka-221835234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
        <button className="visit-btn"> Linkined</button>
      </a>
    </header>
  );
}
