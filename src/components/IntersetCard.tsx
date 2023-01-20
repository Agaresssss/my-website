import {
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  keyframes,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
type propsType = {
  icon?: string;
  title?: string;
  detail?: string;
};

const dissolve = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    }`;

const InterestCard = ({ icon, title, detail }: propsType) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const animate: any = (inView: boolean, animation: String) => {
    if (inView) {
      return animation;
    }
  };

  return (
    <Card
      sx={cardLayout}
      as={motion.div}
      ref={ref}
      animation={animate(inView, `${dissolve} 2s ease`)}
    >
      <CardBody>
        <Container color="#FFFFFF" sx={detailLayout} centerContent>
          <Image
            src={icon}
            fallbackSrc="https://via.placeholder.com/256"
            alt="activity icon"
            boxSize="75px"
          />

          <Heading sx={titleLayout} textAlign="center" marginTop="20px">
            {title}
          </Heading>
          {detail}
        </Container>
      </CardBody>
    </Card>
  );
};

let cardLayout = {
  width: "240px",
  height: "250px",
  border: "1px solid",
  borderImage:
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",
  borderOpacity: "0.8",
  borderRadius: "0px",
  cursor: "grab",
  pointerevents: "none",
};

let titleLayout = {
  fontFamily: "Bebas Neue",
  fontWeight: "400",
  letterSpacing: "0.2em",
  fontSize: "22px",
  color: "#FFFFFF",
  opacity: "0.8",
};

let detailLayout = {
  fontFamily: "Gravity",
  fontWeight: "light",
  fontSize: "14px",
  color: "#FFFFFF",
  opacity: "0.8",
};

export default InterestCard;
