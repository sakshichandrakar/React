import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Create_note from './Create_note';
import Note from './Note';



const Google_keep = () =>
{
		const [addItem, setAddItem] = useState([]);

		const addNote =(note) =>
		{
			setAddItem((prevData) =>{
				return [...prevData,note];
			});
			console.log(note);
		}
		const onDelete = (id) =>
		{
			setAddItem((olddata) => 
				olddata.filter((currdata,indx) =>
				{ 
                   return indx !== id;
				})
				)

		}
	return(
		<>
		<Header/>
		<Create_note passNote={addNote}/>
		<div className="div_inner">
			{ addItem.map((val,index) => 
			{
				return(
					<Note
					key={index}
					id={index}
					title={val.title}
					content={val.content}
					deleteItem ={onDelete}
				/>
				)
			})}
		</div>
		<Footer/>
		</>

		)
}
export default Google_keep;