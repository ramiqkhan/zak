import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Home from "../src/pages/home";
import Team from "./pages/ourteam";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
