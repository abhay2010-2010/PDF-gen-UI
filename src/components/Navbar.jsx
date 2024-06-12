import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" h="80" p="10px" bg="grey" color="white">
      <Link to="/">
        <Button variant="ghost" backgroundColor="pink" w="70px" h="50">Home</Button>
      </Link>
      <Flex>
        <Link to="/auth">
          <Button mr="2" backgroundColor="pink" w="70px" h="50">Login</Button>
        </Link>
        <Link to="/auth">
          <Button backgroundColor="pink" ml="10px" w="70px" h="50">Sign Up</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
