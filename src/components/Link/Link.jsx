import React from 'react';
import './Link.css';

const Link = ({route}) => {
    
    return (
       <li className='mx-2 NavMenu hover:bg-purple-600'>
        <a href= {route.path}>{route.name}</a>
       </li>
    );
};

export default Link;