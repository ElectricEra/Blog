import React from 'react';

import './Navbar.scss';

import { MenuLink, Logo, Icon } from '../../molecules';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Logo />
                    <Icon />
                </div>
                <div>
                    <MenuLink name='Blog' path='/blog' classes=''/>
                    <MenuLink name='Projects' path='/projects' classes=''/>
                    <MenuLink name='Showcase' path='/showcase' classes=''/>
                    <MenuLink name='About me' path='/about' classes=''/>
                </div>
            </div>
        );
    }
}

export default Navbar;
