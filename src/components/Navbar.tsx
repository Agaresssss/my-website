import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Button,
  ButtonGroup,
  VStack,
} from "@chakra-ui/react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";

const getName = (path: string) => {
  switch (path) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/portfolio":
      return "portfolio";
    case "/contact":
      return "contact";
    default:
      return "home";
  }
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
   
      <Flex
        justify="space-between"
        h="64px"
        align="center"
        bg="#17141B"
        w="80%" position='fixed'
        zIndex='1'
      >
        <Text sx={headerFont}>
          <Link to="/">PHUETTIPOL</Link>
        </Text>
        <ButtonGroup
          variant="unstyled"
          spacing="20px"
          w="444px"
          justifyContent="flex-end"
        >
          <Button
            value="home"
            isActive={getName(location.pathname) === "home"}
            sx={menuFont}
            onClick={(e) => {
              navigate("/");
            }}
          >
            HOME
          </Button>
          <Button
            value="about"
            isActive={getName(location.pathname) === "about"}
            sx={menuFont}
            onClick={(e) => {
              navigate("/about");
            }}
          >
            ABOUT
          </Button>
          <Button
            value="portfolio"
            isActive={getName(location.pathname) === "portfolio"}
            sx={menuFont}
            onClick={(e) => {
              navigate("/portfolio");
            }}
          >
            PORTFOLIO
          </Button>
          <Button
            value="contact"
            isActive={getName(location.pathname) === "contact"}
            sx={menuFont}
            onClick={(e) => {
              navigate("/contact");
            }}
          >
            CONTACT
          </Button>
        </ButtonGroup>
      </Flex>
   
  );
};

export default Navbar;

let headerFont = {
  color: "#FFFFFF",
  fontFamily: "Gravity",
  fontWeight: "bold ",
  fontStyle: "light",
  fontSize: "22px",
  letterSpacing: "0.33em",
};

let menuFont = {
  color: "#FFFFFF",
  fontFamily: "Gravity",
  fontStyle: "normal",
  fontSize: "16px",
  letterSpacing: "0.2em",
  transition : "all 0.3",
  _hover: {
    fontWeight: "",
    textShadow: "0px 0px 10px rgba(255, 255, 255);",
  },
  _active: {
    fontWeight: "bold",
    textShadow: "0px 0px 10px rgba(255, 255, 255);",
  },
};
