import {
  Box,
  Center,
  Flex,
  Text,
  IconButton,
  ButtonGroup,
  keyframes
} from "@chakra-ui/react";
import Experienceitem from "./Experienceitem";
import { motion,AnimatePresence,useInView} from "framer-motion";
import {wrap} from 'popmotion'
import { useState, useEffect ,useRef} from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";



interface experienceType {
    img: string;
    title: string;
    description: string;
}

type propsType = {
    data : experienceType[]
}


const Experience = ({data} : propsType) => {
  const [current, setCurrent] = useState(1);
  const [[page, direction], setPage] = useState([0, 0]);
  

const index = wrap(0, data.length, page);
    console.log(index);
    const paginate = (newDirection : number) => {
        setPage([page + newDirection, newDirection]);
    }

const preIndex = wrap(0, data.length, page - 1);
const nextIndex = wrap(0, data.length, page + 1);
    

const ref = useRef(null);
const inView = useInView(ref, { once: true })
const fade = keyframes`
  from {
    opacity: 0;
    }
    to {
      opacity: 1;
      }`

const spacer = keyframes`
  from {
    opacity: 0;
   transform: translateY(-40px);
   }
    
    to {
      opacity: 0.8;
      transform: translateX(0px);
      }`

  return (
    <>
   
   
    <Box sx={boxlayout} position="relative"  ref = {ref} animation = {inView && `${fade} 1s ease-in` } >
     
      <Flex justifyContent="center" h="520px" justifyItems="flex-start"   >
      <IconButton
      size= "lg"
       position='absolute'
        left='0'
        top='45%'
        color='#FFFFFF'
        variant="outline"
        opacity='0.8'
          onClick={() => paginate(-1)}
          aria-label="prev"
          icon={<BiLeftArrow />}
        />
      <Experienceitem img={data[preIndex].img} title={data[preIndex].title} description = {data[preIndex].description}  animation = {inView && `${spacer} 2s ease` } />
        <Experienceitem img={data[index].img} title={data[index].title} description = {data[index].description}  animation = {inView && `${spacer} 3s ease` } />
        <Experienceitem img={data[nextIndex].img} title={data[nextIndex].title} description = {data[nextIndex].description} animation = {inView && `${spacer} 4s ease` } />
        
        <IconButton
        size= "lg"
         position='absolute'
         right='0'
         top='45%'
        color='#FFFFFF'
        variant="outline"
          opacity='0.8'
          onClick={() => paginate(1)}
          aria-label="next"
          icon={<BiRightArrow />}
        />
        
      </Flex>
    </Box>
   
    
    
     
        
      
    </>
  );
};


let boxlayout = {
  marginTop: "100px",
  width: "100%",
  height: "100%",
};

export default Experience;
