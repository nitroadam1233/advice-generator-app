import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const AdviceContainer = () => {
  const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
  }));
  
  return (
    <Box 
    sx={{
      width: "30%",
      height: 250,
      backgroundColor: "hsl(217, 19%, 38%)",
      borderRadius: 3
    }}
    >
      <Stack 
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
        sx={{ height: "100%", mt: 2 }}
      >
        <Item>Advice #</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  )
}

export default AdviceContainer