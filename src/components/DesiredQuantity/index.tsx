import { Box, Flex, Input } from "@chakra-ui/react";
import { PropsData } from "../FirstTable";

type Props = {
  item: PropsData;
};
export function DesiredQuantity({ item }: Props) {
  // Use o value da propriedade como value inicial do estado

  return (
    <Flex width={"8rem"}>
      <Flex w={"100%"}>
        <Box
          display={"flex"}
          bg={item.bgTable}
          paddingY={"24px"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input
            w={"40%"}
            h={"24px"}
            borderColor={"#003366"}
            type="text"
            value={item.valuesDesired}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
