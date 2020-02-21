import React from 'react';
import { NavLink } from "react-router-dom";
import './styles/Menu.css'

interface IMenu {
    nameApp: string
}

const Menu = ({ nameApp }: IMenu) => {
    return (
        <div className='menu col-lg-3 shadow-sm p-3 bg-white rounded'>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item h6'>
                    <NavLink exact to={`${nameApp}/`} > Home Page </NavLink>
                </li>
                <li className='list-group-item h6'>
                    <NavLink to={`${nameApp}/focusable-input`} >Focusable-input</NavLink>
                </li>
                <li className='list-group-item h6'>
                    <NavLink to={`${nameApp}/voting-list/${15}`} >voting-list/15</NavLink>
                </li>
                <li className='list-group-item h6'>
                    <NavLink to={`${nameApp}/register-form`} >register-form</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;