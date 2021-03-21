import React, { useEffect } from "react"
import Parallax from "parallax-js";
import Shape1 from "./Shapes/Shape1";
import Shape2 from "./Shapes/Shape2";
import Shape3 from "./Shapes/Shape3";
import Shape4 from "./Shapes/Shape4";
import Shape5 from "./Shapes/Shape5";
import Shape6 from "./Shapes/Shape6";
import Shape7 from "./Shapes/Shape7";
import Shape8 from "./Shapes/Shape8";
import Shape9 from "./Shapes/Shape9";
import Shape10 from "./Shapes/Shape10";
import Shape11 from "./Shapes/Shape11";
import Shape12 from "./Shapes/Shape12";
import Shape13 from "./Shapes/Shape13";
import Shape14 from "./Shapes/Shape14";
import Shape15 from "./Shapes/Shape15";
import Shape16 from "./Shapes/Shape16";
import Shape17 from "./Shapes/Shape17";
import Shape18 from "./Shapes/Shape18";
import Shape19 from "./Shapes/Shape19";

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
      <Shape5 />
      <Shape6 />
      <Shape7 />
      <Shape8 />
      <Shape9 />
      <Shape10 />
      <Shape11 />
      <Shape12 />
      <Shape13 />
      <Shape14 />
      <Shape15 />
      <Shape16 />
      <Shape17 />
      <Shape18 />
      <Shape19 />
    </div>
  )
}
