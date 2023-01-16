import { motion,AnimatePresence } from "framer-motion";
import {wrap} from 'popmotion'
import { useState, useEffect } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import {
    Box,
    Center,
    Flex,
    Text,
    IconButton,
    ButtonGroup,
  } from "@chakra-ui/react";


type propsType = {
    children? : JSX.Element | JSX.Element[];
    length : number;
}



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



const Carousel = ({children,length} : propsType) => {

    const [[page, direction], setPage] = useState([0, 0]);

    const index = wrap(0, length, page);
    
        const paginate = (newDirection : number) => {
            setPage([page + newDirection, newDirection]);
        }
    

    return (
        <>
        <AnimatePresence initial={false} custom={direction}>
        <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                }
            }}
            ><Box>
                {children}
            </Box>
            
            </motion.div>
    </AnimatePresence>
    <ButtonGroup position="absolute" color="#ffffff">
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
    )
}

export default Carousel