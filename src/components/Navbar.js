import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <div className="navBar">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='register'>Register</Link></li>
                    <li><Link to='login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
