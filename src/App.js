import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Earphones, Headphones, Home, Speakers, ProductDetails } from "./pages";
// import Cart from "./components/Modals/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
