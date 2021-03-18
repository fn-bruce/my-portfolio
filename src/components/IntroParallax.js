import React, { useEffect } from "react"
import Parallax from "parallax-js";
import Shape1 from "./Shapes/Shape1";

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
    </div>
  )
}
