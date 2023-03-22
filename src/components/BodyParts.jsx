import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';




const BodyParts = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            sx={{
                borderTop: bodyPart === item ? '4px solid #1976D2' : '',
                borderBottomLeftRadius: '20px',
                width: '200px',
                height: '180px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={Icon} alt='dumbbell'
                style={{ width: '60px', height: '68px' }}
                className='bodyPartCard'
            ></img>
            <Typography fontSize='20px' fontWeight='bold' color='#3A1212' textTransform='capitalize'

            >
                {item}
            </Typography>
        </Stack >
    )
}

export default BodyParts