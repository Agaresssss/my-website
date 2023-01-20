import {
  Box,
  Flex,
  Heading,
  keyframes,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import FormEmail from "../components/FormEmail";
const contactData = {
  phone: "+66 87 653 2059",
  mail: "phuettipol.jjrk@mail.kmutt.ac.th",
  github: "https://github.com/Agaresssss",
  facebook: "Ball Around",
  instagram: "Ball Around",
  linkedin: "www.linkedin.com/in/phuettipol-jjrk",
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

type propsType = {
  data: {
    title: string;
    description: string;
  }[];
};

const Contact = ({ data }: propsType) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const getIcon: any = (title: string) => {
    switch (title) {
      case "Phone":
        return AiOutlinePhone;
      case "Mail":
        return AiOutlineMail;
      case "Github":
        return AiOutlineGithub;
      case "Facebook":
        return AiFillFacebook;
      case "Instagram":
        return AiOutlineInstagram;
      case "Linkedin":
        return AiFillLinkedin;
      default:
        return "";
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      justifyContent="center"
      paddingTop="170px"
      ref={ref}
      animation={`${fadeIn} 1s ease-in-out`}
    >
      <Flex width="100%" justifyContent="space-evenly">
        <VStack justify="flex-start" spacing="50px">
          <Heading inlineSize="100%" color="#FFFFFF">
            CONTACT
          </Heading>
          <List spacing="10px" color="#ffffff" sx={listStyle}>
            {data.map((item, index) => {
              return (
                <ListItem key={index}>
                  <ListIcon as={getIcon(item.title)} />
                  {item.description}
                </ListItem>
              );
            })}
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
