// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

import './App.css';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
     <main>
      <Nav />
     
        <Outlet />
      </main>
      <footer className="footer">
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/isaacfallon">
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/isaacfallon/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
           
        </ul>
        <div className="footer-text">
            <p className="social-list__item ">&copy; Isaac Fallon 2024 | &lt;Made with React&gt;</p>
            </div>
    </footer>
    </>
  );
}

export default App;
