import {
  Box,
  VStack,
  HStack,
  Text,
  Flex,
  Icon,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Heading,
} from "@chakra-ui/react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGithub,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import FormEmail from "../components/FormEmail";
const contactData = {
  phone: "0876532059",
  mail: "phuettipol.jjrk@mail.kmutt.ac.th",
  github: "https://github.com/Agaresssss",
  facebook: "Ball Around",
  instagram: "Ball Around",
  linkedin: "www.linkedin.com/in/phuettipol-jjrk",
};

const Contact = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bg="#17141B"
      justifyContent="center"
      paddingTop="170px"
    >
      <Flex width="100%" justifyContent="space-evenly">
        <VStack justify="flex-start" spacing="50px">
          <Heading inlineSize="100%" color="#FFFFFF">
            CONTACT
          </Heading>
          <List spacing="10px" color="#ffffff" sx={listStyle}>
            <ListItem>
              <ListIcon as={AiOutlinePhone} />
              {contactData.phone}
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineMail} />
              {contactData.mail}
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineGithub} />
              {contactData.github}
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillFacebook} />
              {contactData.facebook}
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineInstagram} />
              {contactData.instagram}
            </ListItem>

            <ListItem>
              <ListIcon as={AiFillLinkedin} />
              {contactData.linkedin}
            </ListItem>
          </List>
        </VStack>

        <FormEmail />
      </Flex>
    </Box>
  );
};

export default Contact;

let listStyle = {
  fontFamily: "Gravity",
  fontWeight: "light",
  fontSize: "16px",
  letterSpacing: "0.2em",
};
