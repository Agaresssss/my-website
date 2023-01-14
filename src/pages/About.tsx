import {
  Box,
  Flex,
  Text,
  Image,
  Container,
  Grid,
  GridItem,
  Center,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Spacer,
  Button,
  HStack,
  background,
} from "@chakra-ui/react";
import { format, compareAsc } from "date-fns";
import { useNavigate } from "react-router-dom";
import FrameCard from "../components/FrameCard";

const data = {
  imagePath: "src/assets/DSCF1733_20.jpg",
  dob: new Date(2001, 2, 14),
  interests: [
    {
      icon: "src/assets/flaticon/001-desktop.png",
      title: "Computer",
      detail:
        "I'm interested in Computer, especially in hardware. I like to build my own computer.",
    },
    {
      icon: "src/assets/flaticon/003-robot.png",
      title: "Technology",
      detail: "I'm like to learn about new technology",
    },
    {
      icon: "src/assets/flaticon/005-shuttlecock.png",
      title: "Sport",
      detail: "I like to play sport, especially badminton with my friends",
    },
    {
      icon: "src/assets/flaticon/004-adjustment.png",
      title: "Music",
      detail:
        "In a freetime. I will listen to music to relax and sometime I learn how to produce music from  youtube.",
    },
    {
      icon: "src/assets/flaticon/002-camera.png",
      title: "Photography",
      detail:
        "I love take a picture of nature and people. I like to take a picture of sunset and sunrise.",
    },
  ],
};

const About = () => {
  const navigate = useNavigate();
  const currentDay = new Date(Date.now());
  console.log();

  return (
    <Box w="100%" h="100%" bg="#17141B" paddingTop="170px">
      <Heading sx={headSytle}>ABOUT</Heading>
      <Grid
        margin="100px"
        templateRows="repeat(2 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={10}
      >
        <GridItem rowSpan={3} colSpan={2} w='100%'>
          <Center>
            <Image alt="owner" src={data.imagePath} sx={imgLayout} />
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Container color="#FFFFFF" fontSize="18px" fontWeight="light">
            <Heading
              color="#FFFFFF"
              fontSize="30px"
              fontWeight="bold"
              marginBottom="20px"
            >
              PROFILE
            </Heading>
            Hello, everyone. My name is Phuettipol Jitjaroenkit, you can call me
            Ball. I am a student at King Mongkut's University of Technology
            Thonburi, majoring in Computer Engineering. I am interested in
            full-stack development. I have experience in developing web
            applications using ReactJS, ExpressJS.
            <UnorderedList marginTop="20px">
              <ListItem>
                <Text sx={textLayout}>
                  Day of Birth : {format(data.dob, "dd/MMMM/yyyy")}
                </Text>
              </ListItem>
              <ListItem>
                <Text sx={textLayout}>
                  Age : {currentDay.getFullYear() - data.dob.getFullYear()}{" "}
                </Text>
              </ListItem>
              <ListItem>
                <Text sx={textLayout}>Tel : +66 87 653 2059</Text>
              </ListItem>
              <ListItem>
                <Text sx={textLayout}>
                  Email : phuettipol.jjrk@mail.kmutt.ac.th
                </Text>
              </ListItem>
            </UnorderedList>
            <Button
              marginTop="40px"
              sx={buttonStyle}
              onClick={() => {
                // navigate("/contact");
              }}
            >
              More contacts
            </Button>
          </Container>
        </GridItem>
        <GridItem colSpan={3} rowSpan={3}>
          <Container
            color="#FFFFFF"
            fontSize="18px"
            fontWeight="light"
            marginTop="20px"
            width="100%"
          >
            <Heading
              color="#FFFFFF"
              fontSize="30px"
              fontWeight="bold"
              marginBottom="20px"
            >
              INTERESTS
            </Heading>
            <FrameCard data={data.interests} />
          </Container>
        </GridItem>
      </Grid>
      <Heading marginTop="100px" sx={headSytle}>
        EDUCATION
      </Heading>
    </Box>
  );
};

let imgLayout = {
  width: "100%",
  height: "100%",
};
let textLayout = {
  color: "#FFFFFF",
  //fontSize: "22px",
  fontWeight: "light",
  fontFamily: "Gravity",
};

let headSytle = {
  color: "#FFFFFF",
  fontSize: "56px",
  fontWeight: "bold",
  fontFamily: "Gravity",
  textAlign: "center",
  letterSpacing: "0.33em",
};

let buttonStyle = {
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

export default About;
