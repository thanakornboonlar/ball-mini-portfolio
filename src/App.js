import "./App.css";
import NavBar from "./component/navbar.js";
import HeaderSection from "./component/headersection.js";
import PassionsSection from "./component/passionsection.js";
import FooterSection from "./component/footersection.js";
import ProjectSection from "./component/projectsection";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderSection />
      <PassionsSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}

export default App;
