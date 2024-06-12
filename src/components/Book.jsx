import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react';
import FrontPage from './FrontPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import BackPage from './BackPage';

const Book = () => {
    const [currentPage, setCurrentPage] = useState(0);
  const pages = [<FrontPage />, <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <BackPage />];
  
  const onNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Box maxH={500}  display="flex" flexDirection="column" >
        {pages[currentPage]}
        <Box display="flex" justifyContent="center" marginTop="auto">
          {currentPage > 0 && <Button onClick={onPrevPage}>Prev</Button>}
          {currentPage < pages.length - 1 && <Button onClick={onNextPage}>Next</Button>}
        </Box>
      </Box>
  )
}

export default Book