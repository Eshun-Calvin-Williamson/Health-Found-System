import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import './home.css';
import './footer.css';
import "./about.css";
import "./contact.css"
import "./team.css"
import "./App.css"
const App =()=>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;

