import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./components/PageContrainer";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer />}  >
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="portfolio" element={<h1>Portfolio</h1>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<h1>Error 404 not found</h1>} />
        </Route>
        <Route path="*" element={<h1>Error 404 not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
