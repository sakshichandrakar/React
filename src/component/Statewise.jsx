import React,{ useEffect, useState} from 'react';

const Statewise = () =>
{
	const [data,setData] = useState([]);
	           	//console.log(data);

    const getCovidData = async ()=>
    {
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualdata = await res.json();
      setData(actualdata.statewise);
      console.log(actualdata);
    }
	useEffect(() =>
	{
        getCovidData();
	},[]);
   return(
     <>
     <div className="container-fluid mt-5">
        <div className="main_heading">
            <h1 className="mb-5 text-center"><span className="font-weight-bold">India</span>COVID -19 DASHBOARD</h1>
        </div>
        <div className="table-responsive">
           <table className="table table-hover">
           <thead>
	           <tr>
	           <th>State</th>
	           <th>Confirmed</th>
	           <th>Recovered</th>
	           <th>Deaths</th>
	           <th>Active </th>
	           <th>Update</th>
	           </tr>
           </thead>
           <tbody>
           {
           	 data.map((currElem,ind) =>{
           	 	return(
           	 	<tr key = {ind}>
                 <td>{currElem.state}</td>
                 <td>{currElem.confirmed}</td>
                 <td>{currElem.recovered}</td>
                 <td>{currElem.deaths}</td>
                 <td>{currElem.active}</td>
                 <td>{currElem.lastupdatedtime}</td>
              </tr>

           	 	)
           	 })
           }
              
           </tbody>
           </table>
        </div>
     </div>
     
     </>
   	)
}

export default Statewise;