import { Box, Flex, Text, Image,VStack,Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect,useRef } from "react";
import Portfolioitem from "../components/Portfolioitem";

const data = [
  {

  },{

  },{

  }
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
      <VStack spacing='0px' marginTop='100px'>
      <Portfolioitem />
      <Portfolioitem />
      <Portfolioitem />
      <Portfolioitem />

      </VStack>
      <Heading sx={headSytle} marginTop = '100px'>ACTIVITY</Heading>
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
