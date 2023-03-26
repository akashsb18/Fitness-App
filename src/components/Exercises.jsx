import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material/';

import { exerciseDataOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises, setExercises, bodyPart }) => {
    // console.log(exercises);

    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    // Last exercise of the page 
    const indexOfLastExercise = currentPage * exercisesPerPage;

    // First exercise of the page
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;



    const currentExercises = exercises.slice((indexOfFirstExercise, indexOfLastExercise));
    console.log(currentExercises);

    //On click on pagination, should move to top 
    const paginate = (e, value) => {
        // console.log(value);
        // console.log(e);
        setCurrentPage(value)

        window.scrollTo({ top: 1800, behaviour: 'smooth' })

    }
    return (



        <Box id='exercises'
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            p='20px'

        >
            <Typography variant='h3' mb='46px'>
                Showing Results
            </Typography>
            <Stack direction='row'
                sx={{ gap: { lg: '40px', xs: '50px' } }}
                flexWrap='wrap' justifyContent='center'
            >
                {
                    currentExercises.map((exercise, index) => (
                        <ExerciseCard
                            key={index} exercise={exercise}
                        />
                    ))
                }
            </Stack>
            <Stack mt='100px' alignItems='center'>
                {exercises.length > 9 && (
                    <Pagination
                        color='standard' shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size='large'
                    />
                )}
            </Stack>
        </Box >
    )
}

export default Exercises