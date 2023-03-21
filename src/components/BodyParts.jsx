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
                width: '270px',
                height: '180px',
                cursor: 'pointer',
                gap: '47px'
            }}
        >
            <img src={Icon} alt='dumbbell'
                styles={{ width: '40px', height: '40px' }}
                className='bodyPartCard'
            ></img>

        </Stack >
    )
}

export default BodyParts