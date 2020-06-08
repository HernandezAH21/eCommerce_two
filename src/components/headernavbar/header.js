import React, { Component } from 'react';

import triforce from '../../../static/images/triforce.jpg';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={triforce}/>
            </div>
        )
    }
}

export default Header;