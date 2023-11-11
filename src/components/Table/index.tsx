import { Flex } from "@chakra-ui/react";
import { FirstTable } from "../FirstTable";

export function TableComponent() {
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
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      bg={"white"}
      height={"100%"}
      overflowX={"auto"}
      maxWidth={"70rem"}
      sx={scrollbarStyle}
    >
      <FirstTable />
    </Flex>
  );
}
