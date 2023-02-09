import React,{ useContext } from 'react';
import { FirstName } from './Con';


const ComB = ()=>
{
	const fname = useContext(FirstName);
	return(
		<h1> my love Name is {fname}</h1>
		) 
       
		
};

export default ComB;