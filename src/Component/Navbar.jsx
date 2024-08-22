import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <>
        <div className="nav-image">
            <div className="image">
                {/* <img src="" alt="" /> */} <h1>LOGO</h1>
            </div>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                         <li><Link to='/our'> OUR TEAM</Link></li>
                        <li><Link to='/contact'>CONTACT US</Link></li>
                        <li className="exist"><Link to="/join">JOIN US</Link></li>
                    </ul>
                </nav>
            </div>  
           
        </div>
      </>
    )
}

export default Navbar;