import { Box, Flex, Text } from "@chakra-ui/react";
import { DesiredQuantity } from "../DesiredQuantity";
import { InitTxt } from "../InitTxt";
import { InsumoPurchase } from "../InsumoPurchase";
import { InsumoTxt } from "../InsumoTxt";
import { Suppliers } from "../Suppliers";

export type InputData = {
  inputName: string;
  inputValue: string | number;
};

export type PropsData = {
  id: string;
  name: string;
  valuesDesired: string | number;
  valuesUnit: string | number;
  bgTable: "#F2F2F2" | "#FFF";
};

export const DATA: PropsData[] = [
  {
    id: "1",
    name: "Ambev",
    valuesDesired: 12,
    bgTable: "#F2F2F2",
    valuesUnit: 23,
  },
  {
    id: "2",
    name: "Macro Contabilidade",
    valuesDesired: 12,
    bgTable: "#FFF",
    valuesUnit: 10,
  },
  {
    id: "3",
    name: "Blue Me",
    valuesDesired: 12,
    bgTable: "#F2F2F2",
    valuesUnit: 3,
  },
  {
    id: "4",
    name: "Kingfoods",
    valuesDesired: 12,
    bgTable: "#FFF",
    valuesUnit: 23,
  },
];

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
    <Flex
      gap={50}
      flexDir={"row"}
      overflowX={"scroll"}
      sx={scrollbarStyle}
      w={"100%"}
    >
      <Flex flexDir={"column"} marginTop={78}>
        <Flex flexDir={"row"}>
          <Box
            bg={"#D9D9D9"}
            display={"flex"}
            paddingY={"12px"}
            w={"48%"}
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
            w={"14%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"} marginLeft={"10px"}>
              UNIDADE DE MEDIDA
            </Text>
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />
          <Box
            bg={"#D9D9D9"}
            display={"flex"}
            w={"14%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"} marginLeft={"10px"}>
              QUANTIDADE DESEJADA
            </Text>
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />
          <Box
            bg={"#D9D9D9"}
            display={"flex"}
            w={"24%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              INSUMO DE COMPRA
            </Text>
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />
        </Flex>
        <Box w={"100%"} bg={"#bdbdbd"} height={"1px"} />
        <Flex w={"100%"}>
          <InsumoTxt />
          <InitTxt />
          <Flex flexDir={"column"} w={"14%"}>
            {DATA.map((item) => (
              <Flex key={item.id} flexDir={"column"}>
                <DesiredQuantity item={item} />
              </Flex>
            ))}
          </Flex>
          <Box h={"100%"} bg={"black"} w={"1px"} />
          <InsumoPurchase />
        </Flex>
        <Box
          flexDir={"column"}
          display={"flex"}
          paddingY={"34px"}
          w={"100%"}
          bg={"#D9D9D9"}
          alignItems={"center"}
          justifyContent={"center"}
        ></Box>
      </Flex>
      <Box
        display={"flex"}
        flexDir={"row"}
        // Altere a cor conforme necessário
        position={"relative"} // Necessário para o posicionamento absoluto
        left={"-50px"} // Ajuste conforme necessário para a sobreposição
        zIndex={1} // Certifica-se de que a segunda tabela sobreponha a primeira
      >
        {DATA.map((item) => (
          <Box key={item.id} flexDir={"row"} display={"flex"}>
            <Suppliers item={item} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
