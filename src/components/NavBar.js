import "./NavBar.css";
import logoImg from './../assets/img/emotions2.png';

const NavBar = () => {
  return (
        <nav className="container">    
            <a className="brand_logo" href="home">
               <img src={logoImg} alt='logo Emotions' />
            </a> 
            <ul>
                <li>
                    <a className="menu_items" href="home">Inicio</a>
                </li>
                <li>
                    <a className="menu_items" href="galeria">Galeria</a>
                </li>
                <li>
                    <a className="menu_items" href="nosotros">Nosotros</a>
                </li>
                <li>
                    <a className="menu_items" href="contacto">Contacto</a>
                </li>
            </ul>
        </nav>
  );
};

export default NavBar;