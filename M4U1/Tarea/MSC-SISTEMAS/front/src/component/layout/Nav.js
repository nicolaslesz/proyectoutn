import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>       
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/software">Software</Link></li>
        <li><Link to="/referencias">Referencias</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>        
        </ul>
        </nav>

    );
}
export default Nav;