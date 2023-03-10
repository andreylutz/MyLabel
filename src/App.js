import "./styles/App.scss";

import { useState, useEffect } from "react";

import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";

import { useTransition, animated } from "@react-spring/web";

import { Outlet, useLocation } from "react-router-dom";

import Navigate from "./components/Navigate/Navigate";

function App() {
  // Page transition animation, where transition is an array
  // const location = useLocation();
  // const transition = useTransition(location, (location) => location.key, {
  //   from: {
  //     opacity: 0,
  //   },
  //   enter: {
  //     opacity: 0,
  //   },
  //   leave: {
  //     opacity: 0,
  //   },
  // });

  // Main background
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          el: "#box_content",
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x0,
          color2: 0x3540f2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
      <Navigate />
      <div id="box_content">
        <div className="content"></div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
