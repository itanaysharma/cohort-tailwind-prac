import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RrevenueCard } from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
      </div>
      <div className="flex ">
        <div className="bg-red-500 w-[40%]">hi</div>
        <div className="bg-green-500 w-[40%]">hi</div>
        <div className="bg-yellow-500 w-[20%]">hi</div>
      </div>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-4">hi</div>
        <div className="bg-green-500 col-span-4">hi</div>
        <div className="bg-yellow-500 col-span-2">hi</div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="bg-red-500 ">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-yellow-500 ">hi</div>
      </div>
      <div className="grid grid-cols-2">
        <RrevenueCard
          title={"Amount pending"}
          amount={"92,312.20"}
          orderCount={13}
        ></RrevenueCard>
      </div>
    </>
  );
}

export default App;
