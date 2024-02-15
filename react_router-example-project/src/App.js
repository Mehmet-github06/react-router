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
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";
// import { LoginContext } from "./context/LoginContext";
// import { useState } from "react";
import LoginProvider from "./context/LoginProvider";

function App() {
  // const [user, setUser] = useState({ email: "", password: "" });

  return (
    // <LoginContext.Provider value={{user,setUser}}>
    <LoginProvider>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<PrivateRouter />}>
            <Route index path="" element={<People />} />
            <Route path="/people/:idx" element={<PersonDetail />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          //+ aynı sayfa içinde sayfa açmak için nested yapı
          <Route path="/paths" element={<Paths />}>
            <Route path="fs" element={<FullStack />}>
              <Route path="frontend" element={<Frontend />} />
              <Route path="backend" element={<Backend />} />
            </Route>

            <Route index path="" element={<Aws />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </LoginProvider>

    // </LoginContext.Provider>
  );
}

export default App;
