import React, { createContext } from 'react';
import ComB from './ComB';

const FirstName =createContext();
const LastName =createContext();


const Con = () =>
{
	return(
		<>	
		<FirstName.Provider value={'Prashant'}>
			<LastName.Provider value={"Sakshi"}>
	          <ComB/>	
	      	</LastName.Provider>
		</FirstName.Provider>	
		</>

		)
}
export default Con;
export { FirstName ,LastName };