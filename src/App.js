import "./styles/normalize.css";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Vlog from "./pages/Vlog";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Brand from "./pages/Brand";
import Shop from "./pages/Shop";
import Vlogs from "./pages/Vlogs";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/download" element={<Download />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/blogs" element={<Vlogs />} />
      <Route path="/blog/:id" element={<Vlog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
