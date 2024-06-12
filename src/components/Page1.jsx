import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import url from './vars';

const Page1 = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDetails = JSON.parse(localStorage.getItem("userDetails")); 
        const id = userDetails.id;
        if (userDetails && id) {
          const response = await axios.get(`${url}/books/${id}`);
          const data = response.data[0];
          setTitle(data.title);
          setText(data.pages[0].text);
          setCoverImageUrl(data.pages[0].backgroundImage);
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
      <Text as="h1" fontSize="6xl" fontWeight="bold" color="yellow.300" mb={8}>
        {title}
      </Text>
      <Box
        background="rgba(0, 0, 0, 0.5)"
        padding="20px"
        borderRadius="md"
      >
        <Text fontSize="xl" color="cyan.200">
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default Page1;
