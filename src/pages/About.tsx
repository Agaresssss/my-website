import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  keyframes,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Experience from "../components/Experience";
import FrameCard from "../components/FrameCard";
import Timeline from "../components/Timeline";

type ZoneProps = {
  children: JSX.Element;
  sx?: any;
  animation?: any;
};

const Zone = ({ children, sx, animation }: ZoneProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <Box
      ref={ref}
      opacity={inView ? "1" : "0"}
      {...sx}
      animation={animation}
      transform={inView ? "translateY(100px)" : "translateY(0px)"}
    >
      {children}
    </Box>
  );
};

const dissolve = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    }`;

type propsType = {
  data: {
    name: string;
    education: string[] | any;
    imagePath: string;
    languages: string[];
    dob: Date;
    interests: {
      icon: string;
      title: string;
      detail: string;
    }[];
    experiences:
      | {
          img: string;
          title: string;
        }[]
      | any;
  };
};

const About = ({ data }: propsType) => {
  const navigate = useNavigate();
  const currentDay = new Date(Date.now());

  return (
    <Box
      w="100%"
      h="100%"
      paddingTop="170px"
      paddingBottom="100px"
      animation={`${dissolve} 1s ease-in`}
    >
      <Heading sx={headSytle}>ABOUT</Heading>

      <Zone animation={`${dissolve} 1s ease-in`}>
        <Grid
          margin="100px"
          templateRows="repeat(2 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={10}
        >
          <GridItem rowSpan={3} colSpan={2}>
            <Center>
              <Image alt="owner" src={data.imagePath} sx={imgLayout} />
            </Center>
          </GridItem>
          <GridItem colSpan={3}>
            <Container color="#FFFFFF" fontSize="18px" fontFamily='Gravity Light' fontStyle='normal' fontWeight='normal'>
              <Heading
                color="#FFFFFF"
                fontSize="30px"
                fontWeight="bold"
                marginBottom="20px"
              >
                PROFILE
              </Heading>
              <Text textAlign="justify" fontFamily="Gravity Light">
                Hello, everyone. My name is{"   "}
                
                <Text
                  as="span"
                  fontSize="22px"
                 fontFamily={"Gravity Bold"}
                  color="#FFC107"
                >
                &nbsp;{data.name}
                </Text>
                , you can call me Ball. I am a student at King Mongkut's
                University of Technology Thonburi, majoring in Computer
                Engineering. I am interested in full-stack development. I have
                experience in developing web applications using ReactJS,
                ExpressJS.
              </Text>

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
              </UnorderedList>
              <Heading
                color="#FFFFFF"
                fontSize="30px"
                fontFamily={"Gravity Bold"}
                marginTop="20px"
              >
                LANGUAGES
              </Heading>  
              <UnorderedList marginTop="20px">
                  {data.languages.map((language,index) => {
                    return <ListItem key = {index} ><Text sx={textLayout}>{language}</Text></ListItem>;
                  })}
              </UnorderedList>
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
      </Zone>

      <Heading marginTop="200px" sx={headSytle}>
        EDUCATION
      </Heading>
      <Box
        marginTop="120px"
        fontSize="18px"
        fontWeight="light"
        color="#FFFFFF "
        w="100%"
      >
        <Timeline data={data.education} />
      </Box>

      <Heading marginTop="200px" sx={headSytle}>
        EXPERIENCE
      </Heading>
      <Experience data={data.experiences} />
    </Box>
  );
};

let imgLayout = {
  width: "100%",
  height: "100%",
};
let textLayout = {
  color: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: "normal",
  fontFamily: "Gravity Light",
};

let headSytle = {
  color: "#FFFFFF",
  fontSize: "56px",
  fontWeight: "normal",
  fontStyle: "normal",
  fontFamily: "Gravity Bold",
  textAlign: "center",
  letterSpacing: "0.33em",
};

let buttonStyle = {
  color: "#FFFFFF",
  background:
    "linear-gradient(to right, #4b6cb7 0%, #4d00ab  51%, #4b6cb7  100%)",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  letterSpacing: "0.2em",
  fontFamily: "Gravity Bold",
  fontWeight: "normal",
  fontStyle: "normal",
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

export default About;


// <Button
//                 marginTop="40px"
//                 sx={buttonStyle}
//                 onClick={() => {
//                   navigate("/contact");
//                 }}
//               >
//                 More contacts
//               </Button>