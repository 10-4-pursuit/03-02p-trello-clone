import React from "react";
import "./App.css";
import DragNDrop from "./components/DragNDrop";

const data = [
  { title: "To Do", items: ["1", "2", "3"] },
  { title: "In Progress", items: ["4", "5"] },
  { title: "Done", items: ["6", "7"] }

];

function App() {
  return (
    <div className="App">
      <h1 className="Honk">PROJECT BOARD</h1>
      <header className="App-header">
        <DragNDrop data={data}/>
      </header>
    </div>
  );
}

export default App;
