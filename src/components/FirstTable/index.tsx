"use client";

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
  product: string;
  measurement: string;
  valuesUnit: number;
  bgTable: "#F2F2F2" | "#FFF";
  count?: number;
};

export type PropsDataFornecedor = {
  id: string;
  name: string;
  valuesUnit: number;
};

export const DATA: PropsData[] = [
  {
    id: "1",
    name: "Ambev",
    product: "1324 - BOBINA TERMICA DE PDV KPR PALHA 80X30 UN",
    measurement: "KG",
    bgTable: "#F2F2F2",
    valuesUnit: 23,
  },
  {
    id: "2",
    name: "Macro Contabilidade",
    product: "1325 - BOBINA TERMICA DE PDV KPR PALHA 80X30 UN",
    measurement: "L",
    bgTable: "#FFF",
    valuesUnit: 10,
  },
];

export const DATAFORNECEDOR: PropsDataFornecedor[] = [
  {
    id: "1",
    name: "Ambev",
    valuesUnit: 23,
  },
  {
    id: "2",
    name: "Macro Contabilidade",
    valuesUnit: 10,
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
    <Flex flexDir={"row"} overflowX={"scroll"} sx={scrollbarStyle} w={"100%"}>
      <Flex flexDir={"column"} marginTop={79}>
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
            w={"17%"}
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
            w={"18%"}
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
            w={"26%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              INSUMO DE COMPRA
            </Text>
          </Box>
          {/* <Box h={"100%"} bg={"black"} w={"1px"} /> */}
        </Flex>

        {DATA.map((item) => (
          <Flex w={"100%"} key={item.id} height={"72px"}>
            <InsumoTxt item={item.product} />
            <InitTxt item={item.measurement} />
            <Flex flexDir={"column"} w={"100%"} alignItems={"center"}>
              <Flex flexDir={"column"}>
                <DesiredQuantity item={item} />
              </Flex>
            </Flex>
            {/* <Box bg={"black"} w={"1px"} /> */}

            <InsumoPurchase />
          </Flex>
        ))}

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
        // left={"-50px"} // Ajuste conforme necessário para a sobreposição
        zIndex={1} // Certifica-se de que a segunda tabela sobreponha a primeira
      >
        {DATAFORNECEDOR.map((item, index) => (
          <Box key={item.id} flexDir={"row"} display={"flex"}>
            <Suppliers item={item} index={index} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
