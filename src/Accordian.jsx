import React, { useState } from 'react';
import question from './api'; 
import Myaccordian from './Myaccordian';

const Accordain = () =>
{
	const[data,setData] = useState(question);
	return(
         <>
         <section className="main-div">
         <h1>Sakshi Interview Question</h1>
         {
         	data.map((curElem) =>
         	{
         		const { id} = curElem;
         		return <Myaccordian key={ id } {...curElem} />

         	})
         }
         </section>
         </>
		)
}

export default Accordain