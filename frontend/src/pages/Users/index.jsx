import React from 'react';
import {
  Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, WrapItem
} from '@chakra-ui/react'
import {Link} from "@mui/material";

const Users = () => {
  return (
    <>
      <WrapItem>
        <Button colorScheme='pink'><Link to="/add-user">Add User</Link></Button>
      </WrapItem>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Birthday</Th>
              <Th>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>2skjds</Td>
              <Td><Button colorScheme='pink'>Delete</Button></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

    </>
  );
};

export default Users;
