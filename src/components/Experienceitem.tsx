import { Box, Button, Container, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type propsType = {
  img?: string;
  title?: string;
  description?: string;
  animation?: string;
};

const Experienceitem = ({ img, title, description, animation }: propsType) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={cardLayout}
      justifyContent="center"
      role="group"
      overflow="hidden"
      animation={animation}
    >
      <Box h="470px" display="flex" justifyContent="center" alignItems="center">
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
        role="group"
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
        <Container
          centerContent
          sx={paragraphStyle}
          _groupHover={{
            transition: "0.7s ease",
            opacity: "0.8",
          }}
        >
          {description}
        </Container>
        <Button
          _groupHover={{
            marginTop: "20px",
            transition: "0.7s ease",
            opacity: "1",
          }}
          sx={buttonStyle}
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          See more
        </Button>
      </VStack>
    </Box>
  );
};

let paragraphStyle = {
  transition: "0.5s",
  fontFamily: "Gravity",
  fontWeight: "400",
  fontSize: "14px",
  color: "#FFFFFF",
  opacity: "0",
};

let buttonStyle = {
  opacity: "0",

  color: "#FFFFFF",
  background:
    "linear-gradient(to right, #4b6cb7 0%, #4d00ab  51%, #4b6cb7  100%)",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  letterSpacing: "0.2em",
  fontFamily: "Gravity",
  fontWeight: "bold",
  fontSize: "14px",
  _hover: {
    backgroundPosition: "right center",
    color: "#ffffff",
    textDecoration: "none",
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
  borderImage:
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",
  borderOpacity: "0.8",
  transition: "0.5s",
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
  opacity: "0",
  fontFamily: "bebas neue",
  fontSize: "36px",
  letterSpacing: "0.2em",
  fontWeight: "400",
  color: "#FFFFFF",
};

export default Experienceitem;
