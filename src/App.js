import "./App.css";
import NavBar from "./component/navbar.js";
import HeaderSection from "./component/headersection.js";
import PassionsSection from "./component/passionsection.js";
import FooterSection from "./component/footersection.js";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <NavBar />
        <HeaderSection />
        <PassionsSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
