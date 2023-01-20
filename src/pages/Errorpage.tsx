import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <Box w="100%" h="100vh" bg="#17141B" display="flex" justifyContent="center">
      <Box alignItems="center">
        <Heading
          color="#FFFFFF"
          fontSize="30px"
          fontWeight="bold"
          marginTop="170px"
        >
          Error 404 : Page not found
        </Heading>
        <Button
          marginTop="40px"
          sx={buttonStyle}
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home Page.
        </Button>
      </Box>
    </Box>
  );
};

let buttonStyle = {
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
    color: "#ffffff",
    textDecoration: "none",
  },
  _active: {
    background: "#17141B",
    color: "#ffffff",
  },
};

export default Errorpage;
