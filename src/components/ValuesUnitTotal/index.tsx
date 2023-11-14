"use client";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { DATA, PropsDataFornecedor } from "../FirstTable";

type Props = {
  item: PropsDataFornecedor;
};

export function ValuesUnitTotal({ item }: Props) {
  // const [totalValue, setTotalValue] = useState(0);

  // useEffect(() => {
  //   setTotalValue(count * item.valuesUnit);
  // }, [count, item.valuesUnit]);

  return (
    <Flex flexDir={"column"}>
      {DATA.map((product) => (
        <Flex key={item.id} flexDir={"column"}>
          <Flex width={"100%"} flexDir={"row"}>
            <Flex width={"54%"} flexDir={"row"}>
              <Flex flexDir={"column"} w={"100%"}>
                <Box
                  display={"flex"}
                  // bg={product.bgTable}
                  paddingY={"24px"}
                  w={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Input
                    w={"40%"}
                    h={"24px"}
                    borderColor={"#003366"}
                    value={product.valuesUnit}
                  />
                </Box>
              </Flex>
            </Flex>
            <Box h={"100%"} bg={"black"} w={"1px"} />
            <Flex width={"10rem"} flexDir={"row"}>
              <Flex flexDir={"column"} w={"100%"}>
                <Box
                  display={"flex"}
                  // bg={item.bgTable}
                  paddingY={"24px"}
                  w={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Input
                    value={
                      product?.count
                        ? product.valuesUnit * product?.count
                        : product.valuesUnit
                    }
                    w={"40%"}
                    h={"24px"}
                    borderColor={"#003366"}
                  />
                </Box>
              </Flex>
              <Box h={"100%"} bg={"black"} w={"1px"} />
            </Flex>
          </Flex>
        </Flex>
      ))}
      <Box
        gap={4}
        flexDir={"row"}
        display={"flex"}
        paddingY={"10px"}
        w={"100%"}
        bg={"#D9D9D9"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button bg={"#003366"} width={"28%"} flexDir={"column"}>
          <Text color={"white"}>Fechar</Text>
          <Text color={"white"}>cotaçao</Text>
        </Button>
        <Flex flexDir={"column"}>
          <Text color={"#003366"} fontSize={"16px"} fontWeight={600}>
            Total
          </Text>
          <Text color={"#003366"} fontSize={"16px"} fontWeight={600}>
            R$ 210,00
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
