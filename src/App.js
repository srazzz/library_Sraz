import { Home, LoginPage, About, Feedback, Register, LibraryPage ,Books , LibrarianHomepage} from "./components"
// imported different pages to display in one single page
import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
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
     <Router>
      
      <Routes>
       <Route path="/" element={<Home/>}/>
       {/* <Route path="/branches" element={<Brachespage/>}/> */}
       <Route path="/about" element={<About/>}/>
       <Route path="/Login" element={<LoginPage/>}/>
       <Route path="/Feedback" element={<Feedback/>}/>
       <Route path="/Register" element={<Register/>}/>
       <Route path="/Books" element={<Books/>}/>
       <Route path="/Branches" element={<LibraryPage branches_data ={branches_data}/>}/>
       <Route path="/Librarian_homepage" element={<LibrarianHomepage />}/>

       </Routes>
    </Router>
    </>
  );
}

export default App;
