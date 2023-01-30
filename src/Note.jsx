import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@mui/material/Button';



const Note = (props) =>
{
	const deleteNote = () =>
	{
		props.deleteItem(props.id);
	}
	return(
		<>
         <div className="note">
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <Button variant="outlined" onClick={deleteNote}><DeleteIcon />
				    	</Button>
         </div>
        </>

		)
}
export default Note;