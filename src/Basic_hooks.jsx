import React, { useState } from 'react';


const Basic_hooks = () =>
{
	const state = useState();
	const [count,setCount] = useState(0);
	//let count = 1;
	const IncNum = () =>
	{
		setCount(count +1);
	}
	let time = new Date().toLocaleTimeString();

	const [ctime, setCtime] = useState(time);
	const UpdateTime = () =>
	{
		time = new Date().toLocaleTimeString();
		setCtime(time);
	}

	const [atime, autoCtime] = useState(time);

	const AutoTime = () =>
	{
		time = new Date().toLocaleTimeString();
		autoCtime(time);
	}
	setInterval(AutoTime,1000)

	return (
		<>
		<div className="Current_time">
			<h1 className="">{atime}</h1>
			<div className="Basic_hooks">
			<h1>{count}</h1>
			<button onClick={IncNum}>Click Me</button>
			<h1>{ctime}</h1>
			<button onClick={UpdateTime}>Get Time</button>		
			</div>
		</div>
		
		</>

		);
}
export default Basic_hooks;