import isaacPhoto from '../assets/IF-photo.jpg';

export default function About() {
  return (
    <>
      <div className="aboutHeaderContainer">
        <h2>Hi, I&apos;m <strong>Isaac Fallon</strong></h2>
        <h3 className="sectionSubtitle sectionSubtitleAbout">`full-stack-dev`</h3>
        <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="aboutImg"></img>
      </div>
      <div className="aboutText">
        <p>
          Welcome to my site! I&apos;m a full stack web-developer based in Adelaide, Australia.
        </p>
        <br></br>
        <p>
          I have over five years experience creating engaging digital content across all mediums for internal and external audiences. Although my background is in filmmaking and communications, my current focus is MERN stack development.
        </p>
        <br></br>
        <p>
          Please don&apos;t hesitate to reach out if you have any questions or just want to chat!
        </p>
      </div>
    </>
  );
}
