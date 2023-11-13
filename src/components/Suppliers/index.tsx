import { Box, Flex, Text } from "@chakra-ui/react";
import { PropsData } from "../FirstTable";
import { ValuesUnitTotal } from "../ValuesUnitTotal";

type Props = {
  item: PropsData;
};

export function Suppliers({ item }: Props) {
  return (
    <Flex flexDir={"column"} borderWidth={1} borderRadius={10}>
      <Flex flexDir={"row"}>
        <Box flexDir={"column"} bg={"#D9D9D9"} borderTopRadius={10}>
          <Box
            borderTopRadius={10}
            bg={"#D9D9D9"}
            display={"flex"}
            w={"18rem"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            flexDir={"column"}
            paddingY={"4px"}
          >
            <Text fontWeight={"bold"} fontSize={"16px"}>
              FORNECEDOR 1
            </Text>
            <Text fontWeight={"bold"} fontSize={"16px"} marginBottom={"22px"}>
              {item.name}
            </Text>
          </Box>
          <Box w={"100%"} bg={" gray.600"} height={"1px"} />
          <Box
            display={"flex"}
            flexDir={"row"}
            width={"16rem"}
            justifyContent={"center"}
            alignItems={"center"}
            py={"4px"}
          >
            <Box
              bg={"#D9D9D9"}
              justifyContent={"center "}
              alignItems={"center"}
            >
              <Text fontWeight={"bold"} fontSize={"16px"} marginRight={"20px"}>
                UNITÁRIO
              </Text>
            </Box>
            <Box h={"4rem"} bg={"black"} w={"1px"} />
            <Box bg={"#D9D9D9"} display={"flex"} marginLeft={"20px"}>
              <Text fontWeight={"bold"} fontSize={"16px"}>
                TOTAL
              </Text>
            </Box>
          </Box>
          <Box h={"100%"} bg={"black"} w={"1px"} />
        </Box>

        <Box h={"100%"} bg={" gray.600"} w={"1px"} />
      </Flex>
      <Flex w={"100%"}>
        <ValuesUnitTotal item={item} />
      </Flex>
    </Flex>
  );
}
