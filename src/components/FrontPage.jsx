import React, { useEffect, useState } from 'react';
import { Text, Box } from '@chakra-ui/react';
import axios from 'axios'; 
import url from './vars';

const FrontPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
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
          setAuthor(data.author);
          setCoverImageUrl(data.coverImages[0].imageUrl);
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
      <Text as="h3" fontSize="3xl" fontWeight="bold" color="black" mt="80px">
        Written by {author}
      </Text>
      <img src={coverImageUrl} alt="cover" />
      <Text as="h1" fontSize="6xl" fontWeight="bold" color="black" mb={50}>
       { title}
      </Text>
    </Box>
  );
};

export default FrontPage;
