import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Platform from "./pages/platform/platform";
import Resources from "./pages/resources/resources";
import Services from "./pages/services/services";
import Trackorder from "./pages/trackorder/Trackorder";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/trackorder" element={<Trackorder/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
