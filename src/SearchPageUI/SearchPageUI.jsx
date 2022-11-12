import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import RepositoriesSorting from "./components/RepositoriesSorting";

const SearchPageUI = () => {
  return (
    <Box mt="4rem">
      <Flex justifyContent={"space-between"} p="1rem" w="85vw">
        {" "}
        <Text fontSize={"xl"}>List of Repositories</Text>
        {/* <Button bg="gray.500" color={"whiteAlpha.800"}>
          SORT BY
        </Button> */}
        <RepositoriesSorting />
      </Flex>

      <TableContainer mt="2rem">
        <Table bg="green.50">
          <Thead bg="green.100">
            <Tr>
              <Th>Name</Th>
              <Th>Author</Th>
              <Th>Watchers</Th>
              <Th>Description</Th>
              <Th>last update Date</Th>
              <Th>Forks</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Shakti</Td>
              <Td>Chetan Oli</Td>
              <Td>25</Td>
              <Td>
                <Text> The National Institute for Health and Care</Text>
                <Text> executive non-departmental public...</Text>
              </Td>
              <Td>2022-08-04</Td>
              <Td>5</Td>
            </Tr>
            <Tr>
              <Td>Shakti</Td>
              <Td>Chetan Oli</Td>
              <Td>25</Td>
              <Td>
                <Text> The National Institute for Health and Care</Text>
                <Text> executive non-departmental public...</Text>
              </Td>
              <Td>2022-08-04</Td>
              <Td>5</Td>
            </Tr>
            <Tr>
              <Td>Shakti</Td>
              <Td>Chetan Oli</Td>
              <Td>25</Td>
              <Td>
                <Text> The National Institute for Health and Care</Text>
                <Text> executive non-departmental public...</Text>
              </Td>
              <Td>2022-08-04</Td>
              <Td>5</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>10 results per page</Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
        <Flex justifyContent={"space-between"} p="1rem" w="85vw">
          {" "}
          <Button colorScheme="teal" variant="outline">
            Next Page
          </Button>
          <Text fontSize={"xl"}>Page 1 of 100</Text>
          <Button colorScheme="teal" variant="outline">
            Previous Page
          </Button>
        </Flex>
      </TableContainer>
    </Box>
  );
};

export default SearchPageUI;
