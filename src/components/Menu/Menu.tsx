import React from 'react';
import {  NavLink } from "react-router-dom";
import './styles/Menu.css'

const Menu = () => {
    return (
        <div className='menu col-lg-3 shadow-sm p-3 bg-white rounded'>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item h6'>
                    <NavLink exact to="/" > Home Page </NavLink>
                </li>
                <li className='list-group-item h6'>
                    <NavLink to="/focusable-input" >Focusable-input</NavLink>
                </li>
                <li className='list-group-item h6'>
                    <NavLink to={`/voting-list/${5}`} >voting-list/15</NavLink>
                </li>
                <li className='list-group-item h6'>
                    <NavLink to="/register-form" >register-form</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;