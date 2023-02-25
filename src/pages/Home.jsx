import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';

import Exercise from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <Exercise />
            <SearchExercises />
        </Box>
    )
}

export default Home