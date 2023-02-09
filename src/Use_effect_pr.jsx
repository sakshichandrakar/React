import React, {useState, useEffect} from 'react';

const Use_effect_pr = ()=>{
  const [num,setnum] = useState(0);
  const [nums,setnums] = useState(0);

  useEffect(()=> {
  	//alert("I am Clicked");
  	document.title=`you Clicked me ${num} Times`;
  });

	return(
         <>
         <button onClick={()=> {
         	setnum(num + 1);
         }}>Click Me {num}</button>
        
         <button onClick={()=> {
         	setnums(nums + 1);
         }}>Click Me {nums}</button>
         </>
		)
}

export default Use_effect_pr;