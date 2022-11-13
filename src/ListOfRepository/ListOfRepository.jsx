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
  InputRightElement,
  Input,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { getData } from "../reducers/githubDataReducer";
import RepositoriesSorting from "./components/RepositoriesSorting";

const ListOfRepository = () => {
  const data = useSelector(getData);
  console.log("component data", data);
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
            {data?.items?.map((list) => {
              return (
                <Tr cursor={"pointer"} key={list.id}>
                  <Td>{list.full_name}</Td>
                  <Td>
                    <Image
                      src={list.owner.avatar_url}
                      w="4rem"
                      h="4rem"
                      borderRadius={"50%"}
                    />
                  </Td>
                  <Td>{list.watchers}</Td>
                  <Td>
                    <Text textOverflow={"ellipsis"} maxW="4rem">
                      {" "}
                      {list.description}
                    </Text>

                    {/* <Text> The National Institute for Health and Care</Text>
                    <Text> executive non-departmental public...</Text> */}
                  </Td>
                  <Td>
                    <Moment format="YYYY-MM-DD">
                      {new Date(`${list.updated_at}`)}
                    </Moment>
                  </Td>
                  <Td>{list.forks}</Td>
                </Tr>
              );
            })}
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
            Previous Page
          </Button>
          <Text fontSize={"xl"}>Page 1 of 100</Text>
          <Button colorScheme="teal" variant="outline">
            {" "}
            Next Page
          </Button>
        </Flex>
      </TableContainer>
    </Box>
  );
};

export default ListOfRepository;