import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./components/PageContrainer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer />}  >
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<h1>Error 404 not found</h1>} />
        </Route>
        <Route path="*" element={<h1>Error 404 not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
