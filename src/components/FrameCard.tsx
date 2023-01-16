import { Box, Flex, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import InterestCard from "./IntersetCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState,useEffect,useRef } from "react"; 
interface interestType {
  icon: string;
  title: string;
  detail: string;
}

type propsType = {
  data: interestType[];
};

const FrameCard = ({ data }: propsType) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<any>();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <Flex ref = {carouselRef} as= {motion.div} sx = {carousel} whileTap = {{cursor : 'grabbing'}}  >
      <Flex as= {motion.div}  sx = {innerCarousel} drag = 'x' dragConstraints = {{right :0 , left : -width  }}   >
        {data.map((item, index) => {
          return (
            <InterestCard
              icon={item.icon}
              title={item.title}
              detail={item.detail}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default FrameCard;

let carousel = {
  width : '100%',
  height : '100%',
  cursor : 'grab',
  overflowX : 'hidden'
};

let innerCarousel = {
  display : 'flex',
  direction : 'row',
  gap : '30px',
  padding : '20px',

}