import { Box, Flex, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import InterestCard from "./IntersetCard";
import { motion, AnimatePresence } from "framer-motion";

interface interestType {
  icon: string;
  title: string;
  detail: string;
}

type propsType = {
  data: interestType[];
};

const FrameCard = ({ data }: propsType) => {
  return (
    <Flex overflow="auto">
      <Flex gap="30px" direction="row" padding="20px">
        {data.map((item, index) => {
          return (
            <InterestCard
              icon={item.icon}
              title={item.title}
              detail={item.detail}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default FrameCard;

let carousel = {};
