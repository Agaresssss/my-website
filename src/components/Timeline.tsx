import { Box, Divider, Flex, keyframes } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Timelineitem from "./Timelineitem";

interface dataTypes {
  year: string;
  name: string;
}

type propsType = {
  data: dataTypes[];
};

const fromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
      }`;

const fade = keyframes`
  from {
    opacity: 0;
    }

    to {
      opacity: 1;
      }`;

const Timeline = ({ data }: propsType) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const animate: any = (inView: boolean, animation: String) => {
    if (inView) {
      return animation;
    }
  };

  return (
    <Box
      w="1120px"
      sx={timelineLayout}
      ref={ref}
      animation={animate(inView, `${fade} 1s ease-in`)}
    >
      <Divider
        __css={{
          position: "absolute",
          top: "52%",
          borderImage:
            "linear-gradient(to right,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 50%,rgba(221, 71, 89, 0.64) 100% ) 1",
          opacity: "0.8",
        }}
      />
      <Flex justify="space-evenly" position="relative">
        {data.map((item, index) => (
          <Timelineitem
            key={index}
            item={item}
            animation={inView && `${fromLeft} ${index + 1}.5s ease`}
          />
        ))}
      </Flex>
    </Box>
  );
};

let timelineLayout = {
  position: "relative",
  width: "100%",
  hight: "300px",
};

export default Timeline;

// {data1
//   .map((item, index) => {
//     return (
//       <Box sx={timelineItem}>
//         <Box sx={timelineItemDate}>
//           <Text sx={timelineText}>{item.year}</Text>
//         </Box>
//         <Box sx={timelineItemContent}>
//           <Text sx={timelineItemContentText}>{item.name}</Text>
//         </Box>
//       </Box>
//     );
//   })
//   .reverse()}
