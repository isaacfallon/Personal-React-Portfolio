import { Link, useLocation } from 'react-router-dom';
import RightNav from './RightNav';
import Burger from './Burger';
export default function Nav() {

  const currentPage = useLocation().pathname;

  return (
    <header>
      <h1><Link to="/" className="navLink">IFallon</Link></h1>
        <Burger />  
    </header>
  )
}
