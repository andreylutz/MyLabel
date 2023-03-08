import "./styles/App.scss";

import { Outlet } from "react-router-dom";

import Navigate from "./components/Navigate/Navigate";

function App() {
  return (
    <div>
      <Navigate />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
