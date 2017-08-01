import React, { Component } from 'react';

import defaultAvatarBig from '../assets/img/avatar_default_big.png'

class Avatar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div><img src={defaultAvatarBig} title="" className=''/></div>
        )
    }
    
}

export default Avatar;