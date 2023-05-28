import "./css/App.css";
import WorkExp from "./components/workexp/workexp";
import IntroPage from "./templates/intro";
import Education from "./templates/education";
import DS_Journey from "./components/DS_Journey/ds_journey";

function App() {
  return (
    <div className="App">
      {/* <DS_Journey /> */}
      <IntroPage />
      <Education />
      <WorkExp />
      {/* <AIISC />
      <WalmartLabs />
      <SI_99ROOMZ />
      <KEC_INTERNATIONAL /> */}
    </div>
  );
}

export default App;
