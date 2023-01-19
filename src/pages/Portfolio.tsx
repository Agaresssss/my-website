import { Box, Flex, Text, Image,VStack,Heading } from "@chakra-ui/react";
import { motion ,AnimatePresence} from "framer-motion";
import { useState, useEffect,useRef } from "react";
import Portfolioitem from "../components/Portfolioitem";

const data = [
  {
    img: "src/assets/portfolio-pic/modern-doc/logo.png",
    title: "Modern doc",
    description : "Modern doc is a web application that helps doctors to manage their patients and their medical records. It also helps patients to manage their medical records and to make an appointment with doctors. This project is built with React, Nodejs, Express, MongoDB, and Firebase.",
    path : "modern-doc",
    pics : 5
  },
  {
    img: "src/assets/portfolio-pic/scispec/logo1 3.png",
    title: "ERP Scispec",
    description: "",
    path : "scispec",
    pics : 1
  },
  {
    img: "src/assets/portfolio-pic/angel-bank/log2.png",
    title: "Angel bank",
    description : ""
  },
]


const Portfolio = () => {

 

  return (
    <Box
      w="100%"
      h="calc(100% + 200px)"
      bg="#17141B"
      justifyContent="center"
      paddingTop="200px"
    >
       <Heading sx={headSytle} >EXPERIENCE</Heading>
      <VStack spacing='50px' marginTop='100px' w='100%' >
      <Portfolioitem img= {data[0].img} title = {data[0].title}  detail = {data[0].description} path = {data[0].path} pics = {data[0].pics}/>
      <Portfolioitem img= {data[1].img} title = {data[1].title}  detail = {data[1].description} path = {data[1].path} pics = {data[1].pics} />
      <Portfolioitem />

      </VStack>
      {/* <Heading sx={headSytle} marginTop = '100px'>ACTIVITY</Heading> */}
    </Box>
  );
};

let textStyle = {
  fontSize: "48px",
  color: "#FFFFFF",
  fontFamily: "Bebas Neue",
  letterSpacing: "0.2em",
  textAlign: "center",
  margin: "auto",
};

let headSytle = {
  color: "#FFFFFF",
  fontSize: "56px",
  fontWeight: "bold",
  fontFamily: "Gravity",
  textAlign: "center",
  letterSpacing: "0.33em",
};

export default Portfolio;
