"use client";

import { Box, Flex, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { DATA, PropsData } from "../FirstTable";

interface Props {
  item: PropsData;
}

export function DesiredQuantity({ item }: Props) {
  // Use o value da propriedade como value inicial do estado
  const [count, setCount] = useState(1);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
    DATA.push({
      ...item,
      count,
    });
  };

  return (
    <Flex width={"100%"}>
      <Flex w={"6rem"}>
        <Box
          marginTop={"12px"}
          padding={2}
          display={"flex"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input
            w={"100%"}
            h={"24px"}
            borderColor={"#003366"}
            type="text"
            value={String(count)}
            onChange={(e) => changeValue(e)}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
