import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  Icon,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import Polygon from "./Polygon";
import { BsHexagon } from "react-icons/bs";

interface dataTypes {
  year: string;
  name: string;
}

type propsType = {
  data?: dataTypes[];
};

const data1 = [
    
  {
    year: "2014-2019",
    name: "Taweethapisek School",
  },
  {
    year: "2020-2023",
    name: "King Mongkut's University of Technology Thonburi",
  },
];

const Timeline = ({ data }: propsType) => {
  return (
    <Box w="1120px" sx={timelineLayout}>
      <Divider
        __css={{
          top: "50%",
          "border-image":
            "linear-gradient(to right,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 50%,rgba(221, 71, 89, 0.64) 100% ) 1",
          opacity: "0.8",
        }}
      />

      {data1
        .map((item, index) => {
          return (
            <Box sx={timelineItem}>
              <Box sx={timelineItemDate}>
                <Text sx={timelineText}>{item.year}</Text>
              </Box>
              <Box sx={timelineItemContent}>
                <Text sx={timelineItemContentText}>{item.name}</Text>
              </Box>
            </Box>
          );
        })
        .reverse()}
    </Box>
  );
};

let timelineLayout = {
  position: "relative",
  width: "100%",
  hight: "500px",
};

let timelineItem = {
  width: "50%",
  left: "0",
  position: "relative",
  minHeight: "300px",
  float: "right",
};
let timelineItemDate = {
  position: "absolute",
  left: "0px",
  transform: "translateY(-50%)",
  padding: "0",
  width: "auto",
  height: "auto",
  background: "#17141B",
  border: "1px solid",
  "border-image":
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",
};

let timelineText = {
  textAlign: "center",
  fontFamily: "Bebas Neue",
  fontSize: "48px",

  letterSpacing: "0.2em",
};

let timelineItemContent = {
  width: "180px",
  top: "30%",
  position: "absolute",
  left: "0px",
};
let timelineItemContentText = {
  fontSize: "24px",
  margin: "0px",
  fontColor: "#fff",
};

// let timelineItemLayout = {
//   display: "inline-block",
//   width: "20px",
//   height: "20px",
//   background: "#17141B",
//   "text-align": "center",
//   "line-height": "1.2",
//   position: "relative",
//   borderRadius: "50%",
//   _before: {
//     display: "inline-block",
//     content: "attr(data-year)",
//     fontSize: "18px",
//     position: "absolute",
//     left: "50%",
//     transform: "translateX(-50%)",
//   },
//   _after: {
//     display: "inline-block",
//     content: "attr(data-text)",
//     fontSize: "14px",
//     position: "absolute",
//     left: "50%",
//     transform: "translateX(-50%)",
//   },
// };

let shapeGradient = {
  width: "66px",
  height: "66px",
  backgroundColor: "#17141B",
  "border-style": "solid",
  "border-width": "1px",
  "border-image":
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",

  "mix-blend-mode": "normal",
  transform: "rotate(45deg)",
};

export default Timeline;
