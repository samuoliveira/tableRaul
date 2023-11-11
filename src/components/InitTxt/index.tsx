import { Box, Flex, Text } from "@chakra-ui/react";

export function InitTxt() {
  return (
    <Flex width={"20%"} flexDir={"row"}>
      <Flex flexDir={"column"} w={"100%"}>
        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>KG </Text>
        </Box>

        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>KG </Text>
        </Box>

        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>KG </Text>
        </Box>

        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>KG</Text>
        </Box>
      </Flex>
      <Box h={"100%"} bg={"black"} w={"1px"} />
    </Flex>
  );
}
