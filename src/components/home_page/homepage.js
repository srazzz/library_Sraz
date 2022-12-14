import React from 'react';
import logoimg from '../images/Logonew.png';
import '../home_page/homepage.css'
import { Link } from 'react-router-dom'
// import LibraryPage from '../branches_page/librarypage';
// import bgimg from './images/libray2.jpg';
/**
 * this dislays the homepage of site with about us ,feedback ,register in it.
 * @returns returns the home page of the library website and route to repective pages when clicked
 */
function Home() {

    return (
        <>
            <nav className="navbar">
                <img src={logoimg} alt="rgukt logo" />
                <div className="nav-menu">
                    <Link to="/about">
                        <button className="about_button">AboutUs</button>
                    </Link>
                </div>
                <div className="nav-menu">
                    <Link to="/Books">
                        <button className="books_button">Books</button>
                    </Link>
                </div>
                <div className="nav-menu">
                    <Link to="/Register">
                        <button className="register_button">Register</button>
                    </Link>
                </div>
                <div className="nav-menu">
                    <Link to="/Feedback">
                        <button className="register_button">Feedback</button>
                    </Link>
                </div>
                <div className="nav-menu">
                    <Link to="/Branches">
                        <button className="register_button">Branches</button>
                    </Link>
                </div>
                <div className="nav-menu">
                    <Link to="/Librarian_homepage">
                        <button className="register_button">LibrarianHomepage</button>
                    </Link>
                </div>
                {/* <div className="nav-menu"><Link to="/Register"><button className="register_button">Register</button></Link></div> */}



                {/* <li   className="nav-item"><Link to="Feedback">Feedback</Link></li> */}
                {/* navlink   class li is in  */}
                {/* <li   className="nav-item"><Link to="/Register">Register</Link></li> */}
                {/* <li   className="nav-item"><Link to="/Branches">Branches</Link></li>*/}
                {/* <li   className="nav-item"><Link to="/Books">Books</Link></li>  */}

            </nav>
            <div className="main_homepage">
                <div className="content">
                    <h1>Welcome to RGUKT Library.....</h1>
                </div>
                <br />
                <Link to="/Login"><button type="submit " className="login_button " >LOGIN</button></Link><br />
                <Link to="/Login"><button type="submit " className="librarian_login_button " >LIBRARIAN LOGIN</button></Link>
            </div></>
    )
}




// function Home() {

//       return (
//            <>
//            </>
//            )}
export default Home;