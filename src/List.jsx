import React from 'react';
import ol_list,{list} from './Ol_list';
import sum, {sub,mul,div} from './Calculator';

function List()
{
	return (
	<ol>
	<li>Test</li>
	<li>Demo</li>
	<li>Dummy</li>
	<li>{ol_list}</li>
	<li>{list()}</li>
	<li>The sum of two number {sum(10,5)}</li>
	<li>The sub of two number {sub(10,5)}</li>
	<li>The Multiplication of two number {mul(10,5)}</li>
	<li>The Divition of two number {div(25,2)}</li>
	</ol>
	);	
}


export default List;
//export {Calcu};

