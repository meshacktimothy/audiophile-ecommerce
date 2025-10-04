import Home from "./pages/home";
import HandPhones from "./pages/products/handphones";
import Cheakout from "./pages/cheakout";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/handphones" element={<HandPhones />} />
        <Route path="/cheakout" element={<Cheakout />} />
      </Routes>
    </div>
  );
}
