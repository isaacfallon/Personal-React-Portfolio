import isaacPhoto from '../assets/IF-photo.jpg';

export default function Portfolio() {
  return (
    <div className="headingSection">
      <h2>My <strong>Portfolio</strong></h2>
      <p className="section__subtitle section__subtitle--intro">For more check my GitHub.</p>

      <div className="portfolio">
        <a href="#" className="portfolio__item">
          <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="portfolio__img" />
        </a>
        <a href="#" className="portfolio__item">
          <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="portfolio__img" />
        </a>
        <a href="#" className="portfolio__item">
          <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="portfolio__img" />
        </a>
        <a href="#" className="portfolio__item">
          <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="portfolio__img" />
        </a>
        <a href="#" className="portfolio__item">
          <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="portfolio__img" />
        </a>
        <a href="#" className="portfolio__item">
          <img src={isaacPhoto} alt="A headshot photo of Isaac Fallon" className="portfolio__img" />
        </a>
      </div>
    </div>
  );
}
