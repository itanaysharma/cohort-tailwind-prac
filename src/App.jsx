import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
      </div>
      <div className="flex justify-around">
        <div className="bg-red-500">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-yellow-500">hi</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-red-500">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-yellow-500">hi</div>
      </div>
    </>
  );
}

export default App;
