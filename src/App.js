import "./App.css";
import NavBar from "./component/navbar.js";
import HeaderSection from "./component/headersection.js";
import PassionsSection from "./component/passionsection.js";
import PortfolioSection from "./component/passionsection.js";

function App() {
  return (
    <div className="App">
      <header className="App-body">
        {/* <div className="body-background"> */}
        <NavBar />
        <HeaderSection />
        <PassionsSection />
        <PortfolioSection />
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
