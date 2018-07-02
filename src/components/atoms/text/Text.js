import React from 'react';

import './Text.scss';

const Text = (props) => {
    return (
        <p className={`text ${props.classes}`}>{props.text}</p>
    )
}

export default Text;
