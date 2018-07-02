import React from 'react';

import './MenuLink.scss';

import { Image, Text } from '../../atoms';

class MenuLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Image 
                    src="https://i0.wp.com/blog.yen.io/wp-content/uploads/2017/11/hello-world.png?fit=2000%2C1062&ssl=1" 
                    alt="Hello, World!" 
                    classes="image-big" 
                />
                <Text text="Hello, World!" />
            </div>
        );
    }
}

export default MenuLink;
