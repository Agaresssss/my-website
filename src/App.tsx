import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./components/PageContrainer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Errorpage from "./pages/Errorpage";

const personalData = {
  introduction: {
    intro: `HI, EVERYBODY`,
    intro2: ` I'M PHUETTIPOL`,
    occupation: "INTERNSHIP",
  },
  name : "Phuettipol Jitjaroenkit",
  imagePath: "src/assets/DSCF1733_20.jpg",
  dob: new Date(2001, 2, 14),
  education: [
    {
      year: "2014-2019",
      name: "Taweethapisek School",
    },
    {
      year: "2020-2023",
      name: "King Mongkut's University of Technology Thonburi",
    },
  ],
  interests: [
    {
      icon: "src/assets/flaticon/001-desktop.svg",
      title: "Computer",
      detail:
        "I'm interested in Computer, especially in hardware. I like to build my own computer.",
    },
    {
      icon: "src/assets/flaticon/003-robot 1.svg",
      title: "Technology",
      detail: "I'm like to learn about new technology",
    },
    {
      icon: "src/assets/flaticon/005-shuttlecock.svg",
      title: "Sport",
      detail: "I like to play sport, especially badminton with my friends",
    },
    {
      icon: "src/assets/flaticon/004-adjustment 1.svg",
      title: "Music",
      detail:
        "In a freetime. I will listen to music to relax and sometime I learn how to produce music from  youtube.",
    },
    {
      icon: "src/assets/flaticon/002-camera 1.svg",
      title: "Photography",
      detail:
        "I love take a picture of nature and people. I like to take a picture of sunset and sunrise.",
    },
  ],
  experiences: [
    {
      img: "src/assets/portfolio-pic/modern-doc/logo.png",
      title: "Modern doc",
    },
    {
      img: "src/assets/portfolio-pic/scispec/logo1 3.png",
      title: "ERP Scispec",
    },
    {
      img: "src/assets/portfolio-pic/angel-bank/log2.png",
      title: "Angel bank",
    },
  ],
  contact : [
    {
      title: "Phone",
      description: "+66 87 653 2059",
    },
    {
      title: "Mail",
      description: "phuettipol.jjrk@mail.kmutt.ac.th",
    },{
      title: "Github",
      description: "https://github.com/Agaresssss",
    },{
      title: "Facebook",
      description: "Ball Around",
    },{
      title: "Instagram",
      description: "Ball Around",
    },{
      title: "Linkedin",
      description: "www.linkedin.com/in/phuettipol-jjrk",
    }
  ],

};





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="/" index element={<Home data={personalData.introduction} />} />
          <Route path="about" element={<About data={{...personalData}} />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact data = {personalData.contact}/>} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
