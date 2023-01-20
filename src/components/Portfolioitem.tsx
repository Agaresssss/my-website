import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  keyframes
} from "@chakra-ui/react";
import { motion,useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";


type propsType = {
  img?: string;
  title?: string;
  description?: string;
  role ?: string;
  path?: string;
  pics?: number;
  sec? : number
};


const getPicture = (path: String | undefined, picture: number ) => {
  const result: number[] = [];
  for (let i = 1; i <= picture; i++) {
    result.push(i);
  }
  return result.map((item,index) => {
    return (
      <Box as={motion.div} width="450px" marginTop="20px" key={index}>
        <Image
          as={motion.img}
          sx={imgStyle}
          objectFit="contain"
          src={`src/assets/portfolio-pic/${path}/0${item}.jpg`}
        />
      </Box>
    );
  });
};

const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
      }`

const Portfolioitem = ({ img, title, description,role,path,pics,sec }: propsType) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<any>();
  const ref = useRef(null);
  const inView = useInView(ref,{once : true});

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <>
      <Box justifyContent="center" display="flex" ref = {ref} animation = {inView && `${fade} ${sec}.5s ease-in`}>
        <Grid
          w="80%"
          h= '110%'
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={3}>
            <Heading   sx={textStyle}>
              {title}
            </Heading>
          </GridItem>
          <GridItem colSpan={1} rowSpan={2}>
            <Center>
              <Image
                src={img}
                sx={imgStyle}
                objectFit="contain"
                alt="activity icon"
                boxSize="300px"
              />
            </Center>
          </GridItem>
          <GridItem
            colSpan={2}
            rowSpan={2}
            w="100%"
            h="100%"
            justifyContent="flex-start"
          >
            <Text sx={paragraphStyle}>{description}</Text>
            <Text sx={paragraphStyle} marginTop = '20px'>{role}</Text>
            <Flex
              ref={carouselRef}
              as={motion.div}
              sx={carousel}
              whileTap={{ cursor: "grabbing" }}
            >
              <Flex
                as={motion.div}
                sx={innerCarousel}
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {(pics != 0) && getPicture(path, pics)}
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

let textStyle = {
  alignText: "flex-start",
  marginTop: "20px",
  transition: "0.7s ease",
  opacity: "0.8",
  fontFamily: "bebas neue",
  fontSize: "36px",
  letterSpacing: "0.2em",
  fontWeight: "400",
  color: "#FFFFFF",
};

let paragraphStyle = {
  textAlign: "justify",
  transition: "0.5s",
  fontFamily: "Gravity",
  fontWeight: "400",
  fontSize: "18px",
  color: "#FFFFFF",
  opacity: "0.8",
};

let imgStyle = {
  width: "450px",
  cursor: "grab",
  "pointer-events": "none",
};

let carousel = {
  width: "100%",
  height: "calc(100% -10px)",
  cursor: "grab",
  overflowX: "hidden",
};

let innerCarousel = {
  
  display: "flex",
  direction: "row",
  gap: "20px",
};

export default Portfolioitem;
