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
        <Route path="/" element={Home}></Route>
        <Route path="/platform" element={Platform }></Route>
        <Route path="/resources" element={Resources}></Route>
        <Route path="/services" element={Services}></Route>
        <Route path="/trackorder" element={Trackorder}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
