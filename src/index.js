import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import First from './First_task';
import Frnlist from './Frnlist';
import Slot_machine from './Slot_machine';
import Baisc_hooks  from './Basic_hooks';
import Event_hook from './Event_hook';
import First_form from './First_form';
import Inc_dnc from './Inc_dnc';
import Todolist from './Todolist';
import Accor from './Accor';
import Bootstrap_d from './Bootstrap_d';
import Google_keep from './Google_keep';
import Con from './Con';
import Use_effect_pr from './Use_effect_pr';
import Statewise from './component/Statewise';
import Pokemon from './Pokemon';
import { BrowserRouter } from "react-router-dom";
import Dom_router from "./Dom_router";

ReactDOM.render(
	<BrowserRouter>
	<Dom_router/>
	</BrowserRouter>
	,document.getElementById('dom_router'));
ReactDOM.render(<Pokemon/>,document.getElementById('pokemon'));
ReactDOM.render(<Statewise/>,document.getElementById('Statewise'));
ReactDOM.render(<Use_effect_pr/>,document.getElementById('Use_effect_pr'));
ReactDOM.render(<Google_keep/>,document.getElementById('Google_keep'));
ReactDOM.render(<Bootstrap_d/>,document.getElementById('Bootsrap_d'));
ReactDOM.render(<Accor/>,document.getElementById('Accordian'));
ReactDOM.render(<Todolist/>,document.getElementById('ToDoList'));
ReactDOM.render(<Inc_dnc/>,document.getElementById('Inc_dnc'));
ReactDOM.render(<First_form/>,document.getElementById('First_form'));
ReactDOM.render(<Event_hook/>,document.getElementById('Event_hook'));
ReactDOM.render(<Baisc_hooks/>,document.getElementById('hooks'));
ReactDOM.render(<Slot_machine/>,document.getElementById('day'));
ReactDOM.render(<Frnlist/>,document.getElementById('root1'));
ReactDOM.render(<First/>,document.getElementById('jsexp'));
ReactDOM.render(<App />,document.getElementById('root'));

