import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export function FirstTable() {
  return (
    <Table w={"100%"} size={"lg"}>
      <Thead bg="#E0E0E0">
        <Th color="black">INSUMO</Th>
        <Th color="black">UNIDADE DE MEDIDA</Th>
        <Th>QUANTIDADE DESEJADA</Th>
        <Th color="black">INSUMO DE COMPRA</Th>
      </Thead>
      <Tbody flexDir={"column"}>
        <Tr
          cursor={"pointer"}
          _hover={{
            opacity: 1,
            backgroundColor: "#f3f3f3",
          }}
          flexDir={"column"}
        >
          <Td>
            1344 - ARRUELA MOEDOR DE CARNE <b />
            CELERON CARACOL CAF 22-98
          </Td>
          <Td>zzzz</Td>

          <Td colSpan={2} color="black" fontWeight="normal" fontSize="14px">
            ooooo
          </Td>
        </Tr>
        <Tr
          cursor={"pointer"}
          _hover={{
            opacity: 1,
            backgroundColor: "#f3f3f3",
          }}
          flexDir={"column"}
        >
          <Td colSpan={3} color="black" fontWeight="normal" fontSize="14px">
            bbb
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
