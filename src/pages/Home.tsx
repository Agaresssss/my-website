import {
  Box,
  Flex,
  Heading,
  HStack,
  keyframes,
  Text,
  VStack,
} from "@chakra-ui/react";

const Spacer = keyframes`
  0% { 
    letter-spacing: 0.5em;
  }
  50% {
    letter-spacing: 0.55em;
  }
100% {  
  letter-spacing: 0.5em;
 }
    `;
const scale = keyframes`
  0% {
    transform: scale(1);
    }
    
    50% {
      transform: scale(1.05);
      }
    100% {
      transform: scale(1);
      `;
const fadeIn = keyframes`
  0% {
    opacity: 0;
    }
    100% {
      opacity: 1;
      }`;

type propsType = {
  data: {
    intro: string;
    intro2: string;
    occupation: string;
  };
};

const Home = ({ data }: propsType) => {
  const letterSpace = `${Spacer} 15s ease-in-out infinite`;
  const squareScale = `${scale} 2s ease-in infinite`;

  return (
    <>
      <Box h="100%" animation={`${fadeIn} 1s ease-in-out`}>
        <HStack
          justify="space-between"
          direction="row"
          h="100vh"
          justifyItems="flex-start"
        >
          <VStack align="start">
            <Heading animation={letterSpace} sx={heading}>
              {data.intro}
            </Heading>
            <Heading animation={letterSpace} sx={heading}>
              {data.intro2}
            </Heading>
            <Text sx={subHeading}>{data.occupation}</Text>
          </VStack>
          <Flex justifyContent="center" w="573px" animation={squareScale}>
            <Box sx={gradientShape} />
          </Flex>
        </HStack>
      </Box>
    </>
  );
};

let gradientShape = {
  width: "405px",
  height: "405px",
  borderStyle: "solid",
  borderWidth: "10px",
  borderImage:
    "linear-gradient(to bottom, rgba(221,71,89,0.8),rgba(221,71,89,0)) 1",
  mixBlendMode: "normal",
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
  justifyText: "center",
  letterSpacing: "0.5em",
};
export default Home;

//"border-image" : "linear-gradient(to right, #FF008C, #D309E1)",
