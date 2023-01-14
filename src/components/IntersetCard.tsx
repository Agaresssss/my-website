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
  Divider
} from "@chakra-ui/react";

type propsType = {
  icon?: string;
  title?: string;
  detail?: string;
};

const InterestCard = ({ icon, title, detail }: propsType) => {
  return (
    <Card borderRadius='8px' border='1px' opacity='0.8' w="250px" h= '250px' color='#FFFFFF' >
      <CardBody>
   
        <Container color="#FFFFFF" fontSize = '14px' centerContent >
        <Image
          src={icon}
          fallbackSrc="https://via.placeholder.com/256"
          bgColor="#FFFFFF"
            borderRadius="full"
          boxSize="56px"
            
        />
        
          <Heading color="#FFFFFF" fontSize="18px" textAlign='center' marginTop = '20px'>
            {title}
          </Heading>
          {detail}
        </Container>
      </CardBody>
    </Card>
  );
};

export default InterestCard;
