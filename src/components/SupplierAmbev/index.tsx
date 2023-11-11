import { Box, Flex, Text } from "@chakra-ui/react";
import { DesiredQuantity } from "../DesiredQuantity";
import { InitTxt } from "../InitTxt";
import { InsumoPurchase } from "../InsumoPurchase";

export function SupplierAmbev() {
  return (
    <Flex flexDir={"column"} bg={"red"} marginTop={-12}>
      <Flex flexDir={"row"}>
        <Box
          bg={"#D9D9D9"}
          display={"flex"}
          paddingY={"12px"}
          w={"40%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
          <Text fontWeight={"bold"} fontSize={"16px"}>
            FORNECEDOR 1
          </Text>
          <Box w={"100%"} bg={"#bdbdbd"} height={"1px"} marginY={"10px"} />
          <Box display={"flex"} flexDir={"row"} width={"38%"}>
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
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />
        </Box>

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
        <InitTxt />
        <DesiredQuantity />
        <InsumoPurchase />
      </Flex>
    </Flex>
  );
}
