import React, { useEffect } from "react"
import Parallax from "parallax-js";
import Shape1 from "./Shapes/Shape1";
import Shape2 from "./Shapes/Shape2";
import Shape3 from "./Shapes/Shape3";
import Shape4 from "./Shapes/Shape4";

export default function IntroParallax() {

  useEffect(() => {
    var parallax = document.getElementsByClassName('parallax')[0];
    new Parallax(parallax, {
      relativeInput: true
    });
  });

  return (
    <div className="parallax" data-relative-input="true">
      <Shape1 />
      <Shape2 />
      <Shape3 />
      <Shape4 />
    </div>
  )
}
