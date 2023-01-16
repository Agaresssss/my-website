import {
  Box,
  Card,
  Heading,
  Container,
  Text,
  Image,
  Stack,
  Icon,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import {motion , AnimatePresence} from 'framer-motion'

type propsType = {
  icon?: string;
  title?: string;
  detail?: string;
};

const InterestCard = ({ icon, title, detail }: propsType) => {
  return (
    <Card sx={cardLayout} as = {motion.div}>
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
  "border-image":
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",
  borderOpacity: "0.8",
  borderRadius: "0px",
  cursor: "grab",
  'pointer-events': 'none',
  
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
