import {
  Box,
  Text,
  Flex,
  HStack,
  Heading,
  VStack,
  position,
} from "@chakra-ui/react";

interface dataTypes {
  year: string;
  name: string;
}

type propsType = {
  item?: dataTypes;
  animation?: any;
};

const Timelineitem = ({ item , animation }: propsType) => {
  return (
    <Box sx={timelineItem} animation = {animation}>
      <VStack gap="20px" sx={StackTimeline} overflow="hidden">
        <Heading
        sx = {timelineItemYear}
         
        >
          {item?.year}
        </Heading>
        <Box sx={rotateSquare} />
        <Text  sx={timelineItemName}>{item?.name}</Text>
      </VStack>
    </Box>
  );
};

export default Timelineitem;

let StackTimeline = {};

let timelineItem = {
  margin: "auto",
  width: "33%",
  position: "relative",
  height: "210px",
};
let rotateSquare = {
  width: "50px",
  height: "50px",
  transform: "rotate(45deg)",
  border: "solid 1px",
  "border-image":
    "linear-gradient(to bottom, rgba(221,71,89,0.8),rgba(221,71,89,0)) 1",
  background: "#17141B",
};
let timelineItemYear = {
    fontSize:"48px",
    color:"#FFFFFF",
    fontFamily:"Bebas Neue",
    letterSpacing:"0.2em",
    fontWeight:"400",
};
let timelineItemName = {
  textAlign : "center",
  fontSize: "30px",
  color: "#FFFFFF",
  fontWeight: "bold",
  fontFamily: "Gravity",
};
