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
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const PageContainer = () => {
  return (
    <Center sx={layout} bg="#17141B">
      <Box w="80%" >
        <Navbar />
        <Outlet />
      </Box>
    </Center>
  );
};

export default PageContainer;

let layout = {
  height: "100%",
};
