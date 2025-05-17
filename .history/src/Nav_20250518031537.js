import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                   <li><Link to="/">Home</Link></li>
                </li>
            </ul>
        </div>
    )
}
export default Nav;