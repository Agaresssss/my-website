import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type propsType = {
  img?: string;
  title?: string;
  detail?: string;
  path?: string;
  pics?: number;
};

const data: any = {
  img: "https://via.placeholder.com/256",
  title: "Modern doc",
  detail:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
  path: "modern-doc",
  pics: 9,
};

const getPicture = (path: String, picture: number) => {
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

const Portfolioitem = ({ img, title, detail,path,pics }: propsType) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<any>();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <>
      <Box justifyContent="center" display="flex">
        <Grid
          w="80%"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={3}>
            <Heading marginLeft="100px" sx={textStyle}>
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
            <Text sx={paragraphStyle}>{detail}</Text>
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
                {getPicture(path, pics)}
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

let textStyle = {
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
  height: "100%",
  cursor: "grab",
  overflowX: "hidden",
};

let innerCarousel = {
  display: "flex",
  direction: "row",
  gap: "20px",
};

export default Portfolioitem;
