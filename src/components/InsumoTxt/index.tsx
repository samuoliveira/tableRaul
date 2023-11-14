import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  item: string;
};

export function InsumoTxt({ item }: Props) {
  return (
    <Flex w={"100%"}>
      <Flex flexDir={"column"} w={"18rem"}>
        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          padding={"20px"}
          w={" 100% "}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>
            {item}
            {/* <br />
            CELERON CARACOL CAF 22-98 */}
          </Text>
        </Box>
        {/* 
        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"12px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>
            1324 - BOBINA TERMICA DE PDV
            <br />
            KPR PALHA 80X30 UN
          </Text>
        </Box> */}
        {/* 
        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          paddingY={"12px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>
            1324 - BOBINA TERMICA DE PDV
            <br /> KPR PALHA 80X30 UN
          </Text>
        </Box>

        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"12px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>
            1324 - BOBINA TERMICA DE PDV
            <br /> KPR PALHA 80X30 UN
          </Text>
        </Box> */}
      </Flex>
      <Box h={"100%"} bg={"black"} w={"1px"} />
    </Flex>
  );
}
