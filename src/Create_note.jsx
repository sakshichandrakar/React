import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@material-ui/icons/Add';



const Create_note = (props) =>
{
	const [note,setNote] = useState({
		title:'',
		content:'',
	});


	const inputEvent =(event) =>
	{		
		const {name, value} = event.target;
		setNote((PrevData) =>{
			return {
				...PrevData,
				[name] :value,
			};

		});
	}
	const addEvent =() =>
	{
      props.passNote(note);
      setNote({
      	title:"",
      	content:"",
      })
	}

	return(
		<>
		<div className="Main_div1">
           <div className="center_div">
			  <form>
			     <input 
					type="text"
					name="title"
					value={note.title}
					onChange={inputEvent}
					placeholder="Title"
					autoComplete="off"
			          />
			     <textarea 
			     rows="" 
			     column="" 
			     name="content"
			      placeholder="Write A Note" 
			      value={note.content} 
			      onChange={inputEvent} ></textarea>
			     <br/>
			      <Button variant="outlined" onClick={addEvent}><AddIcon /></Button>

			  </form>
			 </div>
		</div>
		</>

		)
}
export default Create_note;