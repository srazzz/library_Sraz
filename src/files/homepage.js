import React from 'react';
import logoimg from './images/Logonew.png';
import LoginPage from "./login"
import About from './about';
import Contact from "./contact"
import Register from './register';
// import bgimg from './images/libray2.jpg';
function Home() {
   
    return (
        <>
            <nav className="navbar">
                <img src={logoimg} alt="rgukt logo" />
                <ul className="nav-menu">
                    <li className="nav-item"><a href={<About/>}>About</a></li>
                    <li className="nav-item"><a href={<Contact/>}>Feedback</a></li>
                    {/* navlink class li is in  */}
                    <li className="nav-item"><a href={<Register/>}>Register</a></li>
                </ul>
            </nav>
            <div class="main">
                <div class="content">
                    <h1>Welcome to RGUKT Library.....</h1>
                </div>

                <br />
                <button type="submit " class="login_button " ><a href={<LoginPage/>}>LOGIN</a> </button>

            </div></>
    )
}
export default Home;