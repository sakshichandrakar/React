import React, {useState} from 'react';

const Event_hook = () =>
{
	const purple = "#8e44ad";
    const[bg,setBg] = useState(purple);
    const textval = "Click Me";
    const[text,setText] = useState(textval);

	const bgChange = ()=>
	{
		const purple = "red";
		setBg(purple);	
		const textval = "ohhh";
		setText(textval);
    }
    const bgcolor = ()=>
    {
        const purple = "black";
		setBg(purple);	
		const textval = "Ayy";
		setText(textval);    }

	return(
	<>
	<div className="Event_hook" style={{backgroundColor :bg}}>
		<button onClick={bgChange} onDoubleClick={bgcolor}>{text}</button>
		</div>
	</>
	);
}
export default Event_hook;