import React from 'react';
import logoimg from './images/Logonew.png';
import './homepage.css'
// import bgimg from './images/libray2.jpg';
function Home() {
   
    return (
        <>
            <nav   className="navbar">
                <img src={logoimg} alt="rgukt logo" />
                <ul   className="nav-menu">
                    <li   className="nav-item">About</li>
                    <li   className="nav-item">Feedback</li>
                    {/* navlink   class li is in  */}
                    <li   className="nav-item">Register</li>
                </ul>
            </nav>
            <div   className="main">
                <div   className="content">
                    <h1>Welcome to RGUKT Library.....</h1>
                </div>
                <br />
                <button type="submit "   className="login_button " >LOGIN</button>

            </div></>
    )
}
export default Home;