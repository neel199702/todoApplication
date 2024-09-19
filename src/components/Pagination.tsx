import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ count, page, onChange }) => {
  return (
    <MuiPagination
      count={count}         // Total number of pages
      page={page}           // Current page number
      onChange={onChange}   // Page change handler
      color="primary"       // Use primary color for pagination
      siblingCount={1}      // Number of pages to show on either side of the current page
      boundaryCount={1}     // Number of boundary pages to show
      sx={{ mt: 2, mb: 2 }} 
    />
  );
};

export default Pagination;
