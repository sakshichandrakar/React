import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Contact from './Contact';
import About from './About';
import Erorr from './Erorr';
import Menu from './Menu';


const Dom_router =() =>
{
	return(
         <>
         <Menu/>
         <Routes>
             <Route exact path="/about" element={<About/>} />
         </Routes>

         <Routes>
             <Route exact path="/contact" element={<Contact/>} />
         </Routes>

         <Routes>
             <Route element={<Erorr/>} />
         </Routes>       
         <br/>       
           </>
		)
}

export default Dom_router;