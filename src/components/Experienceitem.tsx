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
    <Box sx={cardLayout} justifyContent="center" role="group" overflow='hidden'>
      <Box h="470px" display="flex" justifyContent="center" alignItems="center" >
        <Image
          src={img}
          width="300px"
          maxHeight="300px"
          objectFit="contain"
          __css={{
            transition: "0.5s ease-out",

          }}
          _groupHover={{
            transition: "0.7s ease",
            opacity: "0.3",
            filter: "blur(10px)",
          }}
         
        />
      </Box>

      <VStack
      
      role='group'
        justifyContent="center"
        __css={{
          transition: "0.5s ease-out",
          transform: "translateY(0px)",
        }}
        _groupHover={{
          transitionDelay: "0.3s",
          transition: "0.5s ease",
          transform: "translateY(-400px)",
          
        }}
      >
        <Text
          sx={textStyle}
          _groupHover={{
            transition: "0.7s ease",
            opacity: "1",
          }}
        >
          {title}
        </Text>
        <Container  centerContent sx = {paragraphStyle} _groupHover = {{
          transition: "0.7s ease",
          opacity: "0.8",
        }}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '}
        </Container>
        <Button
          
          _groupHover={{
            marginTop: "20px",
            transition: "0.7s ease",
            opacity: "1",
            
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

let vstackLayout = {

}


let paragraphStyle = {
  transition : "0.5s",
  fontFamily: "Gravity",
  fontWeight: "400",
  fontSize: "14px",
  color: "#FFFFFF",
  opacity : "0",
}

let buttonStyle = {
  
  opacity: "0",
  
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
  height: "500px",
  background: "#17141B",
  border: "1px solid",
  "border-image":
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",
  borderOpacity: "0.8",
  transition : "0.5s",
  _hover: {
    transitionDelay: "0.2s",
    transition: "0.5s ease",
    transform: "scale(1.05)",
    boxShadow: "0px 0px 30px 0px rgba(255,255,255,0.4)",
    cursor: "pointer",
  },
};

let textStyle = {
  marginTop: "20px",
  transition: "0.7s ease",
  opacity : "0",
  fontFamily: "bebas neue",
  fontSize: "36px",
  letterSpacing: "0.2em",
  fontWeight: "400",
  color: "#FFFFFF",
  
};
let imageLayout = {};

export default Experienceitem;
