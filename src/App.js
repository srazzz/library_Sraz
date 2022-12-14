import {Home , LoginPage , About , Contact, Register ,LibraryPage } from "./components"
import React from 'react'
import './App.css';
// import './components/homepage.css'
/**
 * displays the 
 * @returns a single page with all the imported pages
 */
function App() {
  return (
    <>
   <Home/>
    <LoginPage/>
    <LibraryPage/>
    <Contact/>
    <About/>
    <Register/>
    </>
  );
}

export default App;
