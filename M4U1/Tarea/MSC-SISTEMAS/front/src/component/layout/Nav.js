import { Link, NavLink } from "react-router-dom";
import '../../styles/layout.css';



const Nav = (props) => {
    return(
        <div className="organiza">
        <nav>       
        <ul>
        <li> < NavLink to="/" className={({ isActive}) => isActive ? "activo" : undefined}>Home</NavLink></li>
        <li> < NavLink to="/software" className={({ isActive}) => isActive ? "activo" : undefined}>Software</NavLink></li>
        <li> < NavLink to="/referencias" className={({ isActive}) => isActive ? "activo" : undefined}>Referencias</NavLink></li>
        <li> < NavLink to="/contacto" className={({ isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>        
        </ul>
        </nav>
        </div>

       
    );
}
export default Nav;