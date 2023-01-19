import {
  Box,
  Card,
  Heading,
  Container,
  Text,
  Image,
  Stack,
  Icon,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Center,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";

type propsType = {
  img?: string;
  title?: string;
};

const Experienceitem = ({ img, title }: propsType) => {
  return (
    <Box sx={cardLayout} justifyContent="center" role="group" >
      <Box h="470px" display="flex" justifyContent="center" alignItems="center">
        <Image
          src={img}
          width="300px"
          maxHeight="300px"
          objectFit="contain"
          _groupHover={{
            transition: "0.7s ease",
            opacity: "0.3",
            filter: "blur(10px)",
          }}
        />
      </Box>

      <VStack
        
        justifyContent="center"
        
        _groupHover={{
          transition: "0.7s ease",
          transform: "translateY(-400px)",
        }}
      >
       
        <Text sx={textStyle} _groupHover = {{
            transition: "0.7s ease",
            display: "block",
        }}>{title}</Text>/
        <Button
              marginTop="40px"
              _groupHover={{
                transition: "0.7s ease",
                opacity: "1",
                display: "block",
              }}
              sx={buttonStyle}
              onClick={() => {
                // navigate("/contact");
              }}
            >
              See more
            </Button>
      </VStack>
    </Box>
  );
};

let buttonStyle = {
    opacity: "0",
    display: "none",
  color: "#FFFFFF",
  background:
    "linear-gradient(to right, #4b6cb7 0%, #4d00ab  51%, #4b6cb7  100%)",
  "text-transform": "uppercase",
  transition: "0.5s",
  "background-size": "200% auto",
  letterSpacing: "0.2em",
  fontFamily: "Gravity",
  fontWeight: "bold",
  fontSize: "14px",
  _hover: {
    "background-position": "right center",
    color: "#ffffff",
    "text-decoration": "none",
  },
  _active: {
    background: "#17141B",
    color: "#ffffff",
  },
};

let cardLayout = {
  width: "420px",
  height: "480px",
  background: "#17141B",
  border: "1px solid",
  "border-image":
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",
  borderOpacity: "0.8",
  _hover: {
    transition: "0.5s ease",
    transform: "scale(1.05)",
    boxShadow: "0px 0px 30px 0px rgba(255,255,255,0.4)",
    cursor: "pointer",
  },
};

let textStyle = {
    display: "none",
  fontFamily: "bebas neue",
  fontSize: "36px",
  letterSpacing: "0.2em",
  fontWeight: "400",
  color: "#FFFFFF",
};
let imageLayout = {};

export default Experienceitem;
