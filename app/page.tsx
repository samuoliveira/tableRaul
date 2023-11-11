import { TableComponent } from "@/components/Table";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"#dadada"}
    >
      <TableComponent />
    </Flex>
  );
}
