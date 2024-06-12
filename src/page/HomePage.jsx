import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const HomePage = () => {
    
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem' }}>Create Your Book</h1>
      <Link to="/input-page">
        <Button mt="4" colorScheme="teal" size="lg">Create...</Button>
      </Link>
    </div>
  );
};

export default HomePage;
