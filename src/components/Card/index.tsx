import { Box, Button, Image, Text } from "@chakra-ui/react";

import VrProductDefaultCard from "../../assets/images/vr-product-default-card.png";

const Card = () => {
  return (
    <Box
      as="article"
      border="1px"
      borderColor="#dddd"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="16px"
      width="100%"
      height="410px"
      maxWidth="396px"
      padding="20px"
      _hover={{ borderColor: "brand.100", transition: "0.3s all" }}
    >
      <Box
        as="div"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Image src={VrProductDefaultCard} />
        <Text fontSize="1.8rem" fontWeight="bold" noOfLines={2} width="350px">
          Título
        </Text>
        <Text
          fontSize="1.4rem"
          fontWeight="regular"
          noOfLines={3}
          width="350px"
        >
          Texto de referencia com descrição do produto
        </Text>
      </Box>
      <Box
        as="div"
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="2rem" fontWeight="bold">
          R$ 00,00
        </Text>
        <Button
          fontWeight="semibold"
          fontSize="1.4rem"
          padding="20px 15px"
          borderRadius="100px"
          backgroundColor="brand.100"
          color="white"
          _hover={{ backgroundColor: "brand.200" }}
        >
          COMPRAR
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
