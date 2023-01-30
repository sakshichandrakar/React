import React from 'react';

function First()
{
		//let curdate = new Date(2022,12,27,13);
		let curdate = new Date();

		curdate = curdate.getHours();
		let heading = "";
		const cssStyle ={

		}
		if(curdate >= 1 && curdate < 12)
		{
			heading = "Good Morning";
			cssStyle.color="red";
		}
		else if(curdate >= 12 && curdate < 18)
		{
			heading = "Good Afternoon";
			cssStyle.color="green";
		}
		else
		{
			heading  = "Good Night";
			cssStyle.color="orange";
		}

		return (
		    <h1 >Hello Sir,<span style ={cssStyle}>{heading}</span></h1>
		);
}

export default First;