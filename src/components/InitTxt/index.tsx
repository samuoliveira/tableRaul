import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  item: string;
};

export function InitTxt({ item }: Props) {
  return (
    <Flex width={"100%"} flexDir={"row"}>
      <Flex flexDir={"column"} w={"8rem"}>
        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"16px"}>{item}</Text>
        </Box>
      </Flex>
      <Box bg={"black"} w={"1px"} />
    </Flex>
  );
}
