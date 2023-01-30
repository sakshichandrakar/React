import React from 'react';
import Card from './Cards';
import sdata from './Sdata';

function frnlist()
{
	return(
     <>
	<h1 className="heading_style">Top 5 list Friends Name</h1>	

	{sdata.map((val,index) =>{
	   return(
			<>
				<Card 
				key={index}
				imgsrc= {val.imgsrc}
				title={val.title} 
				sname={val.sname}
				link ={val.link} />
			</>
		   );
		}
		)}
		</>
		);
}
export default frnlist;