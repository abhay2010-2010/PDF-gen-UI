import React from 'react';
import {
  Box,
  Flex,
  Link,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/" fontSize="xl" fontWeight="bold" color={color}>
          Book PDF Generator
        </Link>
        <Link style={{"marginLeft":"30px"}} href={"/"} fontSize="lg" color={color}>
         View PDF
        </Link>
        <Link style={{"marginLeft":"30px"}} href={"/add"} fontSize="lg" color={color}>
          Create PDF
        </Link>
        <Link style={{"marginLeft":"30px"}} href={"/pdf/:id"} fontSize="lg" color={color}>
          Edit PDF
        </Link>
        <Link style={{"marginLeft":"30px"}} href={"/pdf/:id"} fontSize="lg" color={color}>
          CoverUpload PDF
        </Link>
        <Flex alignItems="center">
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`}
            variant="ghost"
            color={color}
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
          
          <Button  ml={4} colorScheme="teal">
            <Link  href={"/register"} >
              SignIn
            </Link>
          </Button>
        </Flex>
        
      </Flex>
    </Box>
  );
};

export default Navbar;
