import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-narkhnama" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
