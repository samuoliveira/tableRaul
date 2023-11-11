import { Box, Flex, Text } from "@chakra-ui/react";
import { DesiredQuantity } from "../DesiredQuantity";
import { InitTxt } from "../InitTxt";
import { InsumoPurchase } from "../InsumoPurchase";
import { InsumoTxt } from "../InsumoTxt";
import { SupplierAmbev } from "../SupplierAmbev";

export function FirstTable() {
  const scrollbarStyle = {
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      bg: "gray.400",
      borderRadius: "8px",
      backgroundColor: "#122046",
    },
    "&::-webkit-scrollbar-track": {
      bg: "#D9D9D9",
    },
  };
  return (
    <Flex flexDir={"row"} overflowX={"auto"} sx={scrollbarStyle} w={"100%"}>
      <Flex flexDir={"column"} bg={"red"}>
        <Flex flexDir={"row"}>
          <Box
            bg={"#D9D9D9"}
            display={"flex"}
            paddingY={"12px"}
            w={"40%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              INSUMO
            </Text>
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />

          <Box
            bg={"#D9D9D9"}
            display={"flex"}
            paddingY={"12px"}
            w={"16%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"} marginLeft={"16px"}>
              UNIDADE DE MEDIDA
            </Text>
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />
          <Box
            bg={"#D9D9D9"}
            display={"flex"}
            paddingY={"12px"}
            w={"16%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"} marginLeft={"16px"}>
              QUANTIDADE DESEJADA
            </Text>
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />
          <Box
            bg={"#D9D9D9"}
            display={"flex"}
            paddingY={"12px"}
            w={"30%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              INSUMO DE <b /> COMPRA
            </Text>
          </Box>
        </Flex>
        <Box w={"100%"} bg={"#bdbdbd"} height={"1px"} />
        <Flex w={"100%"}>
          <InsumoTxt />
          <InitTxt />
          <DesiredQuantity />
          <InsumoPurchase />
        </Flex>
      </Flex>
      <SupplierAmbev />
    </Flex>
  );
}
