import isaacPhoto from '../assets/IF-photo.jpg';

export default function About() {
  return (
    <>
    <div className="headingSection">
      <h2>Hi, I&apos;m <strong>Isaac Fallon</strong></h2>
      <h3 className="section__subtitle section__subtitle--intro">`full-stack-dev`</h3>
      <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="aboutImg"></img>
    </div>
    <div className="aboutText">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
      velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
      ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
      non risus mi.
    </p>
    <br></br>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
      velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
      ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
      non risus mi.
    </p>
    </div>
    </>
  );
}
