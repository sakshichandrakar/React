import React,{useState} from 'react';
import DeleteIcon from "@material-ui/icons/Delete";



const Todolists =(props) =>
{
	const[line,setLine] = useState();
  const cutIt =()=>
  {
  	 setLine(true);
  }
	
   return(
   
     <>
    
       <div className="todo_style">
       <span onClick={cutIt}>
       <DeleteIcon  className="DeleteIcon" />
       </span>
          <i className="fa fa-times" arial-hidden="true"onClick={()=>
          	{
          		props.onSelect(props.id);
          	}} />
   	       <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
   	   </div>
   	</>
   );

};

export default Todolists;