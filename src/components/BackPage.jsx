import { Box, VStack, Image, Text, HStack, Divider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import url from './vars';

const BackPage = () => {
  const [title, setTitle] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [user, setUser] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        setUser(userDetails.username);
        const id = userDetails.id;
        if (userDetails && id) {
          const response = await axios.get(`${url}/books/${id}`);
          const data = response.data[0];
          setTitle(data.title);
          setCoverImageUrl(data.pages[0].backgroundImage);
          setCreatedAt(data.createdAt);
        } else {
          console.error('User details not found in localStorage');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <Box
      backgroundImage={`url(${coverImageUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      border="2px solid"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      padding="20px"
      margin={20}
    >
      <Text as="h1" fontSize="6xl" fontWeight="bold" color="yellow.300">
        {title}
      </Text>
      <Divider borderColor="black" borderWidth="2px" width="80%" />
      <Box mt={10}>
        <Text fontSize="lg" color="cyan.200">Created by: {user}</Text>
        <Text fontSize="lg" color="cyan.200">Created at: {createdAt}</Text>
        <HStack spacing={4} mt={2}>
          <FaFacebook size="24px" color="blue.500" />
          <Text fontSize="lg" color="blue.300">www.facebook.{title}.com</Text>
        </HStack>
        <HStack spacing={4} mt={2}>
          <FaTwitter size="24px" color="blue.400" />
          <Text fontSize="lg" color="blue.300">www.twitter.{title}.com</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default BackPage;
