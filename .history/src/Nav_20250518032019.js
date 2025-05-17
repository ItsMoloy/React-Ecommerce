import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                   <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                     <li><Link to="/update">Add Update</Link></li>
                      <li><Link to="/logout">Logout</Link></li>
                       <li><Link to="/"></Link></li>
                </li>
            </ul>
        </div>
    )
}
export default Nav;