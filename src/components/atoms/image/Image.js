import React from 'react';

import './Image.scss';

const Image = (props) => {
    return (
        <img 
            src={props.src} 
            alt={props.alt} 
            className={`image ${props.classes}`} 
        />
    )
}

export default Image;
