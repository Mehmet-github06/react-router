import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inst" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
