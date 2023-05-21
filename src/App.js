import "./App.css";
import WalmartLabs from "./pages/WalmartLabs";
import SI_99ROOMZ from "./pages/99roomz";
import KEC_INTERNATIONAL from "./pages/KEC_International";
import AIISC from "./pages/AIISC";
import Cars24 from "./pages/Cars24";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Cars24 />
        <WalmartLabs />
        <hr></hr>
        <SI_99ROOMZ />
        <AIISC />
        <KEC_INTERNATIONAL />
      </header>
    </div>
  );
}

export default App;
