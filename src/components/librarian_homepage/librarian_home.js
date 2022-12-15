import React from 'react';
import "./librarian_home.css"
function Librarian_homepage(){
	return(
		<>
		<div className="whole">
		<div className="buttons">
		<table className="table_librarian">
		<tr>
			<th>
				<button className="button_student">Maintain Student Data</button>
			</th>
			<th>
				<button className="button_books">Maintain Books Data</button>
			</th>
			
		</tr>
		<tr>
			<td>
				{/* notification means feedback , requested books, complaints etc */}
				<button className="button_notification">Check Notifications</button>   
			</td>
			<td>
				<button className="button_logout"><pre>     Logout        .</pre></button> 
			</td>
		</tr>
		
			
			
		</table>
	</div></div>
	</>
	)
}
export default Librarian_homepage;