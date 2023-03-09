import "./styles/App.scss";

import { useState, useEffect, useRef } from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";

import { Outlet } from "react-router-dom";

import Navigate from "./components/Navigate/Navigate";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          el: "#content",
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
      <div ref={myRef} id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
