import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./components/PageContrainer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Errorpage from "./pages/Errorpage";


const personalData = {
    
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer />}  >
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<Errorpage/>} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
