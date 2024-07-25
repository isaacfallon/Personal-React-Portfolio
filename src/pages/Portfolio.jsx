import React from "react";

import Projects from '../components/Projects'

export default function Portfolio() {
  return (
    <>
      <div className="portfolioHeaderContainer">
        <h2>My <strong>Portfolio</strong></h2>
        <h3 className="sectionSubtitle sectionSubtitlePortfolio">See more on <a href="https://github.com/isaacfallon" target="blank_" className="subtitleLink">my GitHub.</a></h3>
      </div>

      <div className="portfolioContainer">
        <Projects />
      </div>
    </>
  );
}
