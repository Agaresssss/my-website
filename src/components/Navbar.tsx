import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Button,
  ButtonGroup,
  VStack,
  IconButton,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
} from "@chakra-ui/react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<AiOutlineMenu />}
        variant="outline"
        opacity="0.8"
        color="#FFFFFF"
        display={useBreakpointValue({ base: "flex", md: "none" })}
      />
      <MenuList fontFamily="Gravity Regular" >
        <MenuItem
          value="home"
          sx={mobileMenu}
          onClick={(e) => {
            navigate("/");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          value="about"
          sx={mobileMenu}
          onClick={(e) => {
            navigate("/about");
          }}
        >
          About
        </MenuItem>
        <MenuItem  value="portfolio"
          sx={mobileMenu}
          onClick={(e) => {
            navigate("/portfolio");
          }}
        >Portfolio</MenuItem>
        <MenuItem  value="contact"
          sx={mobileMenu}
          onClick={(e) => {
            navigate("/contact");
          }}
        >Contact</MenuItem>
      </MenuList>
    </Menu>
  );
};

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
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  return (
    <Flex
      justify="space-between"
      h="64px"
      align="center"
      bg="#17141B"
      w="80%"
      position="fixed"
      zIndex="1"
    >
      <Text sx={headerFont}>
        <Link to="/">PHUETTIPOL</Link>
      </Text>
      <ButtonGroup
        variant="unstyled"
        spacing="20px"
        w="444px"
        justifyContent="flex-end"
        display={useBreakpointValue({ base: "none", md: "flex" })}
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
      <MobileMenu />
    </Flex>
  );
};

export default Navbar;

let headerFont = {
  color: "#FFFFFF",
  fontFamily: "Gravity Bold",
  fontSize: "22px",
  letterSpacing: "0.33em",
};

let menuFont = {
  color: "#FFFFFF",
  fontFamily: "Gravity Regular",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: "16px",
  letterSpacing: "0.2em",
  transition: "all 0.3",
  _hover: {
    fontFamily: "Gravity Bold",
    textShadow: "0px 0px 10px rgba(255, 255, 255);",
  },
  _active: {
    fontFamily: "Gravity Bold",
    textShadow: "0px 0px 10px rgba(255, 255, 255);",
  },
};

let mobileMenu = {
  color: "#17141B",
  fontFamily: "Gravity Regular",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: "16px",
  letterSpacing: "0.2em",
}