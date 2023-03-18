import React from 'react';
import { Typography, Box, Stack, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p='20px'>
            <Typography color='#1976D2' fontWeight='600' fontSize='26px'>
                Fittnes Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography lineHeight='35px' mb={3} >
                Check out the most effective exercises
            </Typography>
            <Button variant='contained'
                sx={{ backgroundColor: '#1976D2', padding: '10px' }}
            >Explore Exercises
            </Button>
            <Typography fontWeight={600} color='#1976D2' fontSize='200px' sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' }
            }}>Exercise</Typography>
            <img

                src={HeroBannerImage} alt='banner'
                className='hero-banner-img'

            />
        </Box>
    )
}

export default HeroBanner