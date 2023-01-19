import { Box, Flex, Text, Heading, VStack, HStack } from "@chakra-ui/react";
import GradientSquare from "../components/GradientSquare";

const Home = () => {
  const data = {
    intro: `HI, EVERYBODY`,
    intro2: ` I'M PHUETTIPOL`,
    occupation: "INTERNSHIP",
  };

  return (
    <>
      <Box bg="#17141B" h='100%'  >

        <HStack justify="space-between" direction="row" h = '100vh' justifyItems='flex-start' >
          <VStack align="start">
            <Heading sx={heading}>{data.intro}</Heading>
            <Heading sx={heading}>{data.intro2}</Heading>
            <Text sx={subHeading}>{data.occupation}</Text>
          </VStack>
            <Flex  justifyContent='center' w='573px'   >
            <Box  sx={gradientShape} />
            </Flex>
          
        </HStack>
      </Box>
    </>
  );
};

let gradientShape = {
  width: "405px",
  height: "405px",
  "border-style": "solid",
  "border-width": "10px",
  "border-image":
    "linear-gradient(to bottom, rgba(221,71,89,0.8),rgba(221,71,89,0)) 1",

  // position: "absolute",
  
  //top: "295px",

  "mix-blend-mode": "normal",
  transform: "rotate(45deg)",
};

let subHeading = {
  fontFamily: "Bebas Neue",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "28px",
  color: "#DD4759",
  letterSpacing: "0.5em",
};

let heading = {
  fontFamily: "Bebas Neue",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "50px",
  color: "#FFFFFF",
  letterSpacing: "0.5em",
};
export default Home;

//"border-image" : "linear-gradient(to right, #FF008C, #D309E1)",
