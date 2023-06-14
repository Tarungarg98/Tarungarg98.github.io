import React from "react";
import "./awards.css";
import rookie_img from "./images/rookie.png";
import inv_img from "./images/c2b_inventory.png";
import aus_img from "./images/aus.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Awards = () => {
  return (
    <div className="awards" id="awards">
      <h1> Awards</h1>
      <div class="row">
        <div class="col-md-4">
          <img src={rookie_img}></img>
        </div>
        <div class="col-md-4">
          <img src={aus_img}></img>
        </div>
        <div class="col-md-4">
          <img src={inv_img}></img>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Awards;
