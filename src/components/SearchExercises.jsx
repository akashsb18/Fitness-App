import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exrciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [bodyParts, setBodyParts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exrciseOptions);
            setBodyParts(['all', ...bodyPartsData]);

            // console.log(setBodyParts);
        }
        fetchExerciseData();
    }, [])


    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exrciseOptions);

            console.log(exerciseData);
        }
    }

    return (
        <Stack p='20px' alignItems='center' justifyContent='center' mt='37px'>
            <Typography
                fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign='center'>
                Awesome exercises you <br /> should know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '320px' },
                        backgroundColor: 'cream',
                        borderRadius: '40px'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value.toLowerCase())
                    }
                    onClick={handleSearch}
                    placeholder='Search Exercises'
                    type='text'
                ></TextField>
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#1976D2',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                >Search</Button>
            </Box>
            <Box sx={{
                position: 'relative', width: '100%', p: '20px'
            }} >
                {/* <HorizontalScrollbar /> */}
                <HorizontalScrollbar data={bodyParts}
                    bodyPart={bodyPart} setBodyPart={setBodyPart}
                />
            </Box>

        </Stack>
    )
}

export default SearchExercises