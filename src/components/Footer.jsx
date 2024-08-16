import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
    <ul className="social-list">
        <li className="social-list__item">
            <a className="social-list__link" href="https://github.com/isaacfallon" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </li>
        <li className="social-list__item">
            <a className="social-list__link" href="https://www.linkedin.com/in/isaacfallon/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </li>
       
    </ul>
    <div className="footer-text">
        <p className="social-list__item ">&copy; Isaac Fallon 2024 | &lt;Made with React&gt;</p>
        </div>
</footer>
  );
}
