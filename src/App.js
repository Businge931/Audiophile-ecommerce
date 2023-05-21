import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Earphones, Headphones, Home, Speakers } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/spaekers" element={<Speakers />} />
      </Routes>
    </div>
  );
}

export default App;
