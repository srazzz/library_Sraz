import { Home, LoginPage, About, Feedback, Register, LibraryPage } from "./components"
// imported different pages to display in one single page
import React from 'react'
import './App.css';

const branches_data = [
  {
    branch: "CSE"
  },
  {
    branch: "ECE"
  },
  {
    branch: "CHEM"
  },
  {
    branch: "MECH"
  },
  {
    branch: "MME"
  },
  {
    branch: "CIVIL"
  },
  {
    branch: "OTEHR"
  }
]



/**
 * displays the 
 * @returns a single page with all the imported pages
 */
function App() {
  return (
    <>
      <Home />
      <LoginPage />
      <LibraryPage branches_data={branches_data} />
      <Feedback />
      <About />
      <Register />
    </>
  );
}

export default App;
