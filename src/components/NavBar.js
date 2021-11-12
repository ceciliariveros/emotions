import "./NavBar.css";
import logoImg from './../assets/img/emotions2.png';

const NavBar = () => {
    let ruta= '#'
  return (
        <nav className="container">    
            <div className="brand_logo">
               <img src={logoImg} alt='logo Emotions' />
            </div> 
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