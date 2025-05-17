import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                   <li><Link to="/">Products</Link></li>
                    <li><Link to="/">Add</Link></li>
                     <li><Link to="/">Products</Link></li>
                </li>
            </ul>
        </div>
    )
}
export default Nav;