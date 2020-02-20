import React from 'react';
import {  NavLink } from "react-router-dom";
import './styles/Menu.css'

const Menu = () => {
    return (
        <div className='menu col-lg-3 shadow-sm p-3 mb-5 bg-white rounded'>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <NavLink exact to="/" > Home Page </NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to="/focusable-input" >Focusable-input</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to={`/voting-list/${15}`} >voting-list/15</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to="/register-form" >register-form</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;