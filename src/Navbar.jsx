
import {NavLink} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    
    const setActiveClass = ({ isActive}) => (isActive ? "active" : "inActive")



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid cajalink">
                    <NavLink className={setActiveClass} to="/">Home</NavLink>
                    <NavLink className={setActiveClass} to="/Pokemones">Pokemon</NavLink>
                 </div>
            </nav>
     </div>
    )
}

export default Navbar;

            