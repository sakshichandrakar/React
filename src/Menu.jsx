import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu =() =>
{
	return(
        <>
        <div className="menu_style">
	        <NavLink activeClassName="active_class" to="/About">About us </NavLink>
	        <NavLink activeClassName="active_class" to="/contact">Contact Us </NavLink>
	        <NavLink activeClassName="active_class" to="/service">Service </NavLink>
	        <NavLink activeClassName="active_class" to="/name">Name </NavLink>

	    </div>    
        </>
		)
}
export default Menu;

/*<br/>
	        <br/>
	        <a href="/About" >AboutUs</a>
	        <a href="/contact">ContactUs </a>*/