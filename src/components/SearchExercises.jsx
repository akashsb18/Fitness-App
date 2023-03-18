import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
    return (
        <Stack p='20px' alignItems='center' justifyContent='center' mt='37px'>
            <Typography
                fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign='center'>
                Awesome exercises you <br /> should know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{}}
                    height='76px' value='' placeholder='Search Exercises'
                    type='text'
                ></TextField>
            </Box>

        </Stack>
    )
}

export default SearchExercises