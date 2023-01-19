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
  keyframes,
} from "@chakra-ui/react";
import { format, compareAsc } from "date-fns";
import { useNavigate } from "react-router-dom";
import FrameCard from "../components/FrameCard";
import Timeline from "../components/Timeline";
import Experience from "../components/Experience";
import { useInView } from "framer-motion";
import {useRef,useEffect} from 'react'

const data = {
  
};
type ZoneProps = {
  children: JSX.Element;
  sx?: any;
  animation?: any;
}

const Zone = ({children, sx,animation } :ZoneProps) => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <Box ref={ref} opacity = {inView ? '1' : '0'} {...sx} animation = {animation} transform = {
      inView ? 'translateY(100px)' : 'translateY(0px)'
    }>
      {children}
    </Box>
  )
}

const dissolve = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
    }`

type propsType = {
    data : {
        imagePath: string;
        dob: Date;
        interests: {
            icon: string;
            title: string;
            detail: string;
        }[];
        experiences: {
            img: string;
            title: string;
        }[];
    }
}

const About = ({data} : propsType) => {
 

  const navigate = useNavigate();
  const currentDay = new Date(Date.now());
  



  return (
    <Box w="100%" h="100%"  paddingTop="170px" paddingBottom='100px' animation={`${dissolve} 1s ease-in`} >
      <Heading sx={headSytle}>ABOUT</Heading>
      

     <Zone animation={`${dissolve} 1s ease-in`}>
      <Grid
        margin="100px"
        templateRows="repeat(2 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={10}
      >
        <GridItem rowSpan={3} colSpan={2} >
          <Center>
            <Image alt="owner" src={data.imagePath} sx={imgLayout}  />
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Container color="#FFFFFF" fontSize="18px" fontWeight="light" >
            <Heading
              color="#FFFFFF"
              fontSize="30px"
              fontWeight="bold"
              marginBottom="20px"
            >
              PROFILE
            </Heading>
            <Text textAlign='justify'>
            Hello, everyone. My name is  <Text as="span" fontSize='22px' fontWeight='bold' color="#FFC107">{data.name}</Text> 
            , you can call me
            Ball. I am a student at King Mongkut's University of Technology
            Thonburi, majoring in Computer Engineering. I am interested in
            full-stack development. I have experience in developing web
            applications using ReactJS, ExpressJS.
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
                 navigate("/contact");
              }}
            >
              More contacts
            </Button>
          </Container>
        </GridItem>
        <GridItem colSpan={3} rowSpan={3} >
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
      
      <Heading marginTop="80px" sx={headSytle}>
        EDUCATION
      </Heading>
      <Box  marginTop='120px' fontSize="18px" fontWeight="light" color='#FFFFFF '  w='100%' >
        <Timeline data={data.education}/>
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
