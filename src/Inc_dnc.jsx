import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@mui/material/Tooltip';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import AddCircleSharpIcon from '@material-ui/icons';
const Inc_dnc = ()=>
{
	const[value,setvalue]=useState(0);
	const incfun =()=>
	{
       setvalue(value+1);
	}
	const dncfun =()=>
	{
		if(value >0)
		{
         setvalue(value-1);
        }
        else
        {
        	setvalue(0);
        	alert("value is zero");
        }
	}
    return(
    	<>
    	<div className="Main_div">
    	  <div className="centerdiv">
	    	    <h1 className="text-capitalize text-center">{value}</h1>
		    	<div className="btn_div">
		    	   <Tooltip title="Add">
			    	   <Button variant="outlined" onClick={incfun}><AddIcon /></Button>
			    	   </Tooltip>
			    	<Tooltip title="Delete">
				    	<Button variant="outlined" onClick={dncfun}><DeleteIcon />
				    	</Button>
				    </Tooltip>	
		    	</div>
	    	</div>
    	</div>
    	</>
	)
}
export default Inc_dnc;