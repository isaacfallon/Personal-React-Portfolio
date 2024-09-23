import isaacPhoto from '../assets/IF-photo.jpg';

import { Link, useLocation } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="aboutHeaderContainer">
        <h2>Hi, I&apos;m <strong>Isaac Fallon</strong></h2>
        <h3 className="sectionSubtitle sectionSubtitleAbout">Digital Comms & Web Dev</h3>
        <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="aboutImg"></img>
      </div>
      <div className="aboutText">
        <p className="regularBold">
          I&apos;ve spent the last five years immersing myself in the world of digital content, crafting engaging experiences for a wide range of audiences.
        </p>
        <br></br>
        <p>
          My filmmaking and communications background give me a keen eye for storytelling and design which I now also channel into building dynamic web applications using the MERN stack.
        </p>
        <br></br>
        <p>
          Please don&apos;t hesitate to reach out at the links below or using <Link to="/Contact" className="homeLink">my contact page.</Link>
        </p>
      </div>
    </>
  );
}
