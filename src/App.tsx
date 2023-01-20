import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./components/PageContrainer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Errorpage from "./pages/Errorpage";
import  {PersonalData}  from "./data/PersonalData";
import './App.css'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="/" index element={<Home data={PersonalData.introduction} />} />
          <Route path="about" element={<About data={{...PersonalData}} />} />
          <Route path="portfolio" element={<Portfolio data={PersonalData.experiences} />} />
          <Route path="contact" element={<Contact data = {PersonalData.contact}/>} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
