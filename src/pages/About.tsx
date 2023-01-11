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
} from "@chakra-ui/react";
import {format,compareAsc} from 'date-fns'

const data = {
  imagePath: "src/assets/DSCF1733_20.jpg",
  dob: new Date(2001, 3, 14),
};

const About = () => {
   
    const currentDay = new Date(Date.now())
    console.log()

  return (
    <Box w="100%" h="100%" bg="#17141B" paddingTop="170px" >
         <Heading sx = {headSytle}>ABOUT</Heading>
      <Grid
        margin= '100px'
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={3} colSpan={2}>
          <Image alt="owner" src={data.imagePath} sx={imgLayout} />
        </GridItem>
        <GridItem colSpan={3}>
          <Container color="#FFFFFF" fontSize="18px" fontWeight="light">
            Hello, everyone. My name is Phuettipol Jitjaroenkit, you can call me
            Ball. I am a student at King Mongkut's University of Technology
            Thonburi, majoring in Computer Engineering. I am interested in
            full-stack development. I have experience in developing web
            applications using ReactJS, ExpressJS.
          </Container>
        </GridItem>
        <GridItem colSpan={3}>
          <Container color="#FFFFFF" fontSize="18px" fontWeight="light">
            <UnorderedList>
                <ListItem><Text sx = {textLayout}>Day of Birth : {format(data.dob,'dd/MM/yyyy')}</Text></ListItem>
                <ListItem><Text sx = {textLayout}>Age : {currentDay.getFullYear()-data.dob.getFullYear()}  </Text></ListItem>
                <ListItem><Text sx = {textLayout}>Day of Birth : 14 March 2001</Text></ListItem>
                <ListItem><Text sx = {textLayout}>Day of Birth : 14 March 2001</Text></ListItem>
                
                </UnorderedList>
          </Container>
        </GridItem>
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={1}></GridItem>
      </Grid>
      <Heading marginTop= "100px" sx = {headSytle}>EDUCATION</Heading>
    </Box>
  );
};

let imgLayout = {};
let textLayout = {
  color: "#FFFFFF",
    fontSize: "18px",
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
    


}

export default About;
