import Home from './files/homepage'
import React from 'react'
import LoginPage from "./files/details/login"
// import About from './files/details/about';
import Contact from "./files/contact"
import Register from './files/details/register';
import LibraryPage from './files/librarypage'
// import './App.css';
import './files/homepage.css'


function App() {
  return (
    <>
    <Home/>
    <Register/>
    <LoginPage/>
    <LibraryPage/>
    <Contact/>
    {/* <About/> */}
    </>
  );
}

export default App;
