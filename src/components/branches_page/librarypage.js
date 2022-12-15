import React from 'react';
import './librarypage.css';
function Branches(props) {
	return (
		<div class="maincontainer">
			<div class="Button_books">
				{props.data.map((item) =>
					<button class="button_books_button">{item.branch}</button>
				)}
			</div>
		</div>
	)
}

//library page to display options(branches) 

/**
 * displays teh branches to choose 
 * @returns returns to the page of respective branch
 */
function LibraryPage(props) {
	return (
		<div class="maincontainer">
			<Branches data={props.branches_data}/>
		</div>
	)
}
export default LibraryPage;