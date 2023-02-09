import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu =() =>
{
	return(
        <>
        <NavLink activeClassName="active_class" to="/About">About us </NavLink>
        <NavLink activeClassName="active_class" to="/contact">Contact Us </NavLink>
        <br/>
        <a href="/About" >AboutUs</a>
        <a href="/contact">ContactUs </a>
        </>
		)
}
export default Menu;