import React,{useState} from 'react';
import ToDolists from './Todolists';
import Clock from 'react-digital-clock';



const Todolist =()=>
{
	const[inputList,setInputList] = useState();
	const[items,setItems] = useState([]);

	const itemEvent = (event)=>
	{
       setInputList(event.target.value);
	};
	const listOfItem =()=>
	{
       setItems((oldItems) =>
       {
         return[...oldItems,inputList];
       })
       setInputList("");
	};
	const deleteitem =(id)=>
	{
		console.log("hfdjh");
		setItems((oldItems) =>
		{
			return oldItems.filter((arrElem,index) =>
			{ 
				return index !== id;

			})
			})
	}
	return(
		<>
		 
    
		<div className="Main_div">
    	  <div className="center_div">
    	      <br/>
    	      <div style={{color: "red"}}>
    	      <Clock />
    	      </div>
	    	    <h1>ToDo List</h1>
	    	    <br/>
			    	<input type="text" placeholder ="Add a item" value={inputList} onChange={itemEvent}/>
			    	<button onClick={listOfItem} className="btn">+</button>
			    	
                    <ol>
                   { items.map((itemval,index)=>
                    {
                    	return <ToDolists 
                    	key={index}
                    	 id={index} 
                    	 text={itemval}
                    	 onSelect={deleteitem} />;
                    })
                   }
                      
                    </ol>		    	
	    	</div>
    	</div>
		</>
		)
}

export default Todolist;