import { Box, Flex, Text, Image,VStack,Heading,keyframes } from "@chakra-ui/react";
import { motion ,AnimatePresence} from "framer-motion";
import { useState, useEffect,useRef } from "react";
import Portfolioitem from "../components/Portfolioitem";



type propsType = {
  data : {
    img : string,
    title : string,
    description : string,
    role : string,
    path : string,
    pics : number
  }[]
}

const fade = keyframes`
  from {
    opacity: 0;
    }
    to {
      opacity: 1;
      }`

const Portfolio = ({data} : propsType) => {

 

  return (
    <Box
      w="100%"
      h="100%"
      bg="#17141B"
      justifyContent="center"
      paddingTop="200px"
      animation={`${fade} 1s ease-in`}
    >
       <Heading sx={headSytle} >EXPERIENCE</Heading>
      <VStack spacing='50px' marginTop='100px' w='100%' >
        {data.map((item,index) => {
          return (
            <Portfolioitem
              img={item.img}
              title={item.title}
              description={item.description}
              role={item.role}
              path={item.path}
              pics={item.pics}
              sec={index}
            />
          );
        })}

      </VStack>
      
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
