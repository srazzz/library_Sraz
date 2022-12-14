import React from 'react';
import logoimg from '../images/Logonew.png';
import '../home_page/homepage.css'
import {Link} from 'react-router-dom'
// import LibraryPage from '../branches_page/librarypage';
// import bgimg from './images/libray2.jpg';
/**
 * this dislays the homepage of site with about us ,feedback ,register in it.
 * @returns returns the home page of the library website and route to repective pages when clicked
 */
function Home() {
   
    return (
        <>
            <nav   className="navbar">
                <img src={logoimg} alt="rgukt logo" />
                <ul   className="nav-menu">
                    <li   className="nav-item"><Link to="/about">About</Link></li>
                    <li   className="nav-item"><Link to="Feedback">Feedback</Link></li>
                    {/* navlink   class li is in  */}
                    <li   className="nav-item"><Link to="/Register">Register</Link></li>
                    <li   className="nav-item"><Link to="/Branches">Branches</Link></li>
                </ul>
            </nav>
            <div   className="main">
                <div   className="content">
                    <h1>Welcome to RGUKT Library.....</h1>
                </div>
                <br />
                <button type="submit "   className="login_button " ><Link to="/Login">LOGIN</Link></button>

            </div></>
    )
}
export default Home;