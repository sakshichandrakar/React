import React from 'react';
import Logo from './image/logo.jpg'

const Header = () =>
{
	return(
		<>
		<div className="heading_style1">
		   <img src={Logo} alt="logo" height='70'  width='70'/>
		   <h1>Sakshi Chandrakar</h1>
		</div>
		</>

		)
}
export default Header;