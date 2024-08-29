import { Link } from "react-router-dom";
import React,{useState} from "react";
const Navbar =()=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
      }

    return(
        <>
        <div className="nav-image">
            <div className="image">
                {/* <img src="" alt="" /> */} <h1>LOGO</h1>
            </div>
            {!isOpen &&
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            }
            <div className={`navbar ${isOpen ? 'open' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to='/' onClick={closeMenu}>HOME</Link></li>
                        <li><Link to='/about' onClick={closeMenu}>ABOUT</Link></li>
                         <li><Link to='/our' onClick={closeMenu}> OUR TEAM</Link></li>
                        <li><Link to='/contact' onClick={closeMenu}>CONTACT US</Link></li>
                        <li className="exist" onClick={closeMenu}><Link to="/join">JOIN US</Link></li>
                    </ul>
                </nav>
            </div>  
           
        </div>








        




      </>
    )
}

export default Navbar;