import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import Aws from "./pages/Aws";
import FullStack from "./pages/Fullstack";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fronted from "./pages/Fronted";
import Backend from "./pages/Backend";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:idx" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        //+ aynı sayfa içinde sayfa açmak için nrsted yapı
        <Route path="/paths" element={<Paths />}>
          <Route path="fs" element={<FullStack />}>
            <Route path="aws" element={<Fronted/>} />
            <Route path="aws" element={<Backend/>} />
          </Route>

          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
