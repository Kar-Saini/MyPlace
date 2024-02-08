import "./App.css";
import { Route, Routes } from "react-router-dom";
import Entertainment from "./components/entertainment/Entertainment";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div className="w-full h-screen bg-purple-400 flex items-center">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </div>
  );
}

export default App;
