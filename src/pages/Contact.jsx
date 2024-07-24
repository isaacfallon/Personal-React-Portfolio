import loki1 from '../assets/loki1.jpg';


export default function Contact() {
  return (
    <div>
      <h2><strong>Contact</strong> me</h2>
      <p>I&apos;m not sure what else to add here - so here&apos;s are picture of my dog:</p>

      <div className="portfolio">
        <a href="#" className="portfolio__item">
          <img src={loki1} alt="A headshot photo of Isaac Fallon" className="portfolio__img" />
        </a>
      </div>
    </div>
  );
}
