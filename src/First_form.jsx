import React, {useState} from 'react';



const  First_form = ()=>
{

    const[fullname,setFullName] = useState({
    	fname:"",
    	lname:"",
    	email:"",
    	mobile:"",
    	que:"",
    });
    


	const inputEvent =(event) =>
	{
		/*console.log(event.target.name);
		const value = event.target.value;
		const name = event.target.name;*/
       //setName(event.target.value);
       const {value,name} = event.target;
       setFullName((preValue)=>
       {
        console.log(preValue);
        return {
        	...preValue,
        	[name]:value,
        }
   /*     if(name === 'fname')
        {
        	return{
        		fname :value,
        		lname:preValue.lname,
        		email:preValue.email,
        		mobile:preValue.mobile,
        	}
        }else if(name === 'lname')
        {
        	return{
        		fname :preValue.fname,
        		lname:value,
        		email:preValue.email,
        		mobile:preValue.mobile,
        	}
        }else if(name === 'email')
        {
        	return{
        		fname :preValue.fname,
        		lname:preValue.lname,
        		email:value,
        		mobile:preValue.mobile,
        	}
        }
        else if(name === 'mobile')
        {
        	return{
        		fname :preValue.fname,
        		lname:preValue.lname,
        		email:preValue.email,
        		mobile:value,
        	}
        }*/
       });
	}
	

	const onSubmits = (event)=>
	{
		event.preventDefault();
        alert("From submit")
	}
	return(
	<>
	<form onSubmit={onSubmits}>
		<div className="Event_hook">
	     <h1>Form Element {fullname.fname} {fullname.lname}</h1>
	     <p>{fullname.email}</p>
	     <p>{fullname.mobile}</p>
	     <p>{fullname.que}</p>

	     <input type="text" placeholder="Enter Your name" name="fname" onChange={inputEvent} value={fullname.fname}/>
	     <input type="text" placeholder="Enter Your lname" name="lname" onChange={inputEvent} value={fullname.lname}/>
	     <input type="email" placeholder="Enter Your Email" autoComplete="off" name="email" onChange={inputEvent} value={fullname.email}/>
	     <input type="text" placeholder="Enter Your mobile" maxLength="10" name="mobile" onChange={inputEvent} value={fullname.mobile}/>
	     <input type="text" placeholder="Enter Your Qualification" maxLength="10" name="que" onChange={inputEvent} value={fullname.que}/>

	     <button type="submit">Click Me</button>

	     </div>
	     </form>
	</>
	);

};

export default First_form;