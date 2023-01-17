import {
  Box,
  Center,
  Flex,
  Text,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import Experienceitem from "./Experienceitem";
import { motion,AnimatePresence,useTime } from "framer-motion";
import {wrap} from 'popmotion'
import { useState, useEffect } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const data = [
 
];


const variants = {
    
    enter: (direction : number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction : number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }
    }
}
const swipeConfidenceThreshold = 10000;
const swipePower = (offset : number, velocity : number) => {
    return Math.abs(offset) * velocity;
}

interface experienceType {
    img: string;
    title: string;
}

type propsType = {
    data : experienceType[]
}


const Experience = ({data} : propsType) => {
  const [current, setCurrent] = useState(1);
  const [[page, direction], setPage] = useState([0, 0]);
    const time = useTime();

const index = wrap(0, data.length, page);
    console.log(index);
    const paginate = (newDirection : number) => {
        setPage([page + newDirection, newDirection]);
    }

const preIndex = wrap(0, data.length, page - 1);
const nextIndex = wrap(0, data.length, page + 1);
    


  return (
    <>
   
   
    <Box sx={boxlayout} position="relative" as = {motion.div}>
     
      <Flex justifyContent="center" h="520px" justifyItems="flex-start">
      <Experienceitem img={data[preIndex].img} title={data[preIndex].title} />
        <Experienceitem img={data[index].img} title={data[index].title} />
        <Experienceitem img={data[nextIndex].img} title={data[nextIndex].title} />
      </Flex>
    </Box>
   
    <ButtonGroup variant="outline" color='#FFFFFF' >
    
        <IconButton
        
          onClick={() => paginate(-1)}
          aria-label="prev"
          icon={<BiLeftArrow />}
        />
        <IconButton
          onClick={() => paginate(1)}
          aria-label="next"
          icon={<BiRightArrow />}
        />
        
        
      </ButtonGroup>
    </>
  );
};


let boxlayout = {
  marginTop: "100px",
  width: "100%",
  height: "100%",
};

export default Experience;
