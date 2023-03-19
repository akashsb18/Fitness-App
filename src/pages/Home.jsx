import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';

import Exercise from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <Box>
            <HeroBanner />
            <Exercise setExercises={setExercises}
                bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <SearchExercises setExercises={setExercises}
                bodyPart={bodyPart} setBodyPart={setBodyPart}
            />
        </Box>
    )
}

export default Home