import "./NavBar.css";
import logoImg from './../../assets/img/emotions2.png';
import CartWidget from '../cartWidgets/CartWidget'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
        <nav className="container">
            <NavLink  to="/" className="brand_logo" >
               <img src={logoImg} alt='Logo principal de ecommerce' />
            </NavLink> 
            <ul>
                <li>
                    <NavLink to="/" className="menu_items" >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/category/MLA1246" className="menu_items" >Belleza </NavLink>
                </li>
                <li>
                    <NavLink to="/category/MLA1430" className="menu_items" >Ropa y Accesorios</NavLink>
                </li>
                <li>
                    <NavLink  to="/category/MLA3937" className="menu_items" >Joyas y Relojes</NavLink>
                </li>
                {/* <li>
                    <NavLink activeClassName="active" className="menu_items" to="/about">Contacto</NavLink>
                </li> */}
            </ul>
            <CartWidget/>
        </nav>
  );
};

export default NavBar;