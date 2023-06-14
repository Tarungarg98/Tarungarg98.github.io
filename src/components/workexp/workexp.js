import WalmartLabs from "./WalmartLabs";
import SI_99ROOMZ from "./99roomz";
import KEC_INTERNATIONAL from "./KEC_International";
import AIISC from "./AIISC";
import Cars24 from "./Cars24";
import BITS_Project from "./BITS_Project";
import "./workexp.css";

function WorkExp() {
  return (
    <div>
      <div className="workexp" id="workexp">
        <h1>Work Experience</h1>
        <hr></hr>
        <Cars24 />
        <hr></hr>
        <AIISC />
        <hr></hr>
        <WalmartLabs />
        <hr></hr>
        <SI_99ROOMZ />
        <hr></hr>
        <KEC_INTERNATIONAL />
        <hr></hr>
        <h1>College Projects</h1>
        <BITS_Project />
        <hr></hr>
      </div>
    </div>
  );
}

export default WorkExp;
