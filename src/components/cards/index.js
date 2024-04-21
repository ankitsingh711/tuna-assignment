import Rating from '@mui/material/Rating';
import { useState } from 'react';

const Card = ({ imgLink, text}) => {
    const [value, setValue] = useState(2);
    return (
        <div className='card'>
            <div>
                <img src={imgLink} alt="food" />
            </div>
            <div className='card__text__section'>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> <br />
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Card;