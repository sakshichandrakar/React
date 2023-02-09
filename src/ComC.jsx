import React from 'react';
import { FirstName } from './Con';

const ComC = () => {

	return(
       <>
       <FirstName.Consumer>
        {(fname) => {
        	return <h1> My Name is sakshi {fname}</h1>      		
        } }
       </FirstName.Consumer>
      
       </>
		)
}

export default ComC;