import React, { useState } from 'react';
import { Button, Container, Flex, FormControl, FormLabel, Input, Spacer, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import Book from '../components/Book';
import url from '../components/vars';

const InputPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [coverImageTitle, setCoverImageTitle] = useState('');
    const [coverImageAuthor, setCoverImageAuthor] = useState('');
    const [pageBackgroundImage, setPageBackgroundImage] = useState('');
    const [pageText, setPageText] = useState('');
    const [books, setBooks] = useState(false);


    const handleSave = async () => {

        try {
            const data = {
                title,
                author,
                coverImages: [{
                    imageUrl: coverImageUrl,
                    title: coverImageTitle,
                    author: coverImageAuthor
                }],
                pages: [{
                    backgroundImage: pageBackgroundImage,
                    text: pageText
                }]
            };

            const token = localStorage.getItem('token');
            if (!token) {
                window.location.href = '/auth';
                return;
            }
            const response = await axios.post(`${url}/books`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            setBooks(true);
            console.log('Book created');
        } catch (error) {
            console.error('Error generating PDF:', error.message);
        }
    };

    return (
        <Flex
  justify="center"
  ml={200}
  mr={1000}
  style={{
    backgroundImage: 'linear-gradient(to right, #FF6347, #FFA07A)',
    padding: '2rem',
    paddingLeft:"40px",
    borderRadius: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  }}
>
  <Container maxW="lg" >
    <FormControl mb="4">
      <FormLabel color="red" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Title
      </FormLabel>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ fontSize: '1.1rem', borderColor: 'red', borderWidth: '2px', borderRadius: '0.5rem' }}
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Author</FormLabel>
      <Input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ fontSize: '1.1rem', borderColor: 'red', borderWidth: '2px', borderRadius: '0.5rem' }}
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Cover Image URL</FormLabel>
      <Input
        type="file"
        value={coverImageUrl}
        onChange={(e) => setCoverImageUrl(e.target.value)}
        style={{ fontSize: '1.1rem', borderColor: 'red', borderWidth: '2px', borderRadius: '0.5rem' }}
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Cover Image Title</FormLabel>
      <Input
        value={coverImageTitle}
        onChange={(e) => setCoverImageTitle(e.target.value)}
        style={{ fontSize: '1.1rem', borderColor: 'red', borderWidth: '2px', borderRadius: '0.5rem' }}
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Cover Image Author</FormLabel>
      <Input
        value={coverImageAuthor}
        onChange={(e) => setCoverImageAuthor(e.target.value)}
        style={{ fontSize: '1.1rem', borderColor: 'red', borderWidth: '2px', borderRadius: '0.5rem' }}
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Page Background Image</FormLabel>
      <Input
        value={pageBackgroundImage}
        onChange={(e) => setPageBackgroundImage(e.target.value)}
        style={{ fontSize: '1.1rem', borderColor: 'red', borderWidth: '2px', borderRadius: '0.5rem' }}
      />
    </FormControl>
    <FormControl mb="4">
      <FormLabel style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Page Text</FormLabel>
      <Textarea
        value={pageText}
        onChange={(e) => setPageText(e.target.value)}
        style={{ fontSize: '1.1rem', borderColor: 'red', borderWidth: '2px', borderRadius: '0.5rem' }}
      />
    </FormControl>
    <Button
      colorScheme="red"
      onClick={handleSave}
      style={{ fontSize: '1.2rem', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '0.5rem' }}
    >
      Next
    </Button>
  </Container>
  <Spacer />
  {books && <Book />}
</Flex>
    );
}

export default InputPage;
