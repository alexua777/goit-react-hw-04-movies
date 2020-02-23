import React from 'react';
import {NavLink} from 'react-router-dom';
import route from '../router';


const Navigation = () => (
    <ul>
        <li>
            <NavLink to= {route.home}>Home</NavLink>
        </li>
        <li>
            <NavLink to= {route.movies}>Movies</NavLink>
        </li>
    </ul>
);

export default Navigation;