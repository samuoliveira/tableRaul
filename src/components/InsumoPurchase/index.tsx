import { Box, Flex, Select } from "@chakra-ui/react";

export function InsumoPurchase() {
  return (
    <Flex width={"14rem"} flexDir={"row"}>
      <Flex flexDir={"column"} w={"12rem"}>
        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Select
            placeholder="Select option"
            w={"70%"}
            h={"24px"}
            borderColor={"#003366"}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>{" "}
        </Box>
        {/* 
        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Select
            placeholder="Select option"
            w={"70%"}
            h={"24px"}
            borderColor={"#003366"}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>{" "}
        </Box>

        <Box
          display={"flex"}
          bg={"#F2F2F2"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Select
            placeholder="Select option"
            w={"70%"}
            h={"24px"}
            borderColor={"#003366"}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>{" "}
        </Box>

        <Box
          display={"flex"}
          bg={"#fff"}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Select
            placeholder="Select option"
            w={"70%"}
            h={"24px"}
            borderColor={"#003366"}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box> */}
      </Flex>
      {/* <Box h={"18rem"} bg={"black"} w={"1px"} /> */}
    </Flex>
  );
}
