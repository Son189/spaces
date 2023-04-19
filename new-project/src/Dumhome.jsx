import React from "react";
import "./Home.css";

import img1 from "./images/pic1.jpg";
import img2 from "./images/pic2.jpg";
import img3 from "./images/pic3.jpg";
import img4 from "./images/pic4.jpg";
import img5 from "./images/pic5.jpg";
import img6 from "./images/pic6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

function ddHome() {
  return (
    <div className="container">
      <h1>Best spaces</h1>

      <div className="card-grid">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img className="card-img" src={image} alt={`image${index}`} />
            <div className="card-text">
              <input type="text" placeholder="Enter text here" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ddHome;