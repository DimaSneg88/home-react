import React from "react";

import photo from "../assets/photo.jpg";
import Header from "../components/Header";

export default function Gallery() {
  return (
    <div>
      <Header />

      <div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
}
