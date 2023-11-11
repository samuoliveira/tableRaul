import { Box, Flex, Input } from "@chakra-ui/react";

export function DesiredQuantity() {
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
          <Input w={"40%"} h={"24px"} borderColor={"#003366"} />
        </Box>

        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input w={"40%"} h={"24px"} borderColor={"#003366"} />
        </Box>

        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input w={"40%"} h={"24px"} borderColor={"#003366"} />
        </Box>

        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input w={"40%"} h={"24px"} borderColor={"#003366"} />
        </Box>
      </Flex>
      <Box h={"100%"} bg={"black"} w={"1px"} />
    </Flex>
  );
}
