import React from 'react';
import SlotM from './Slot_mach';



const Slot_machine = () =>
{
	return(
	<>
	<h1 className="heading_style" >Welcome to <span style={{fontWeight : "bold"}}>Slot Machine game</span></h1>
	<div className="stotmachine">
	<SlotM x="*" y="*" z="*"/>
	<SlotM x="*" y="$" z="@"/>
	<SlotM x="$" y="$" z="$"/>

   </div>
	</>
	);
}
export default Slot_machine;