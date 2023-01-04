import React from 'react';
import Card from './Card';


const CardList = ({robots}) =>{
	
	return(
<div>
{robots.map((robot, no)=>{
	return( 
		<Card key={no} 
		id={robots[no].id} 
		name={robots[no].name} 
		email={robots[no].email}/>
		);
	})
	}
 </div>

);
 		
}
export default CardList;