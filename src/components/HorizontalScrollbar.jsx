import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import BodyPart from './BodyParts'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import rightArrowIcon from '../assets/icons/left-arrow.png';
import leftArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className='right-arrow'>
            <img src={leftArrowIcon} alt='leftArrow'
            />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()} className='left-arrow'>
            <img src={rightArrowIcon} alt='leftArrow'
            />
        </Typography>
    )
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
                data.map((item) => (
                    <Box
                        key={item.id || item}
                        keyID={item.id || item}
                        title={item.id || item}
                        m='0 40px'
                    >
                        {/* {item} */}
                        <BodyPart item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                        />
                    </Box>
                ))
            }
        </ScrollMenu>
    )
}

export default HorizontalScrollbar