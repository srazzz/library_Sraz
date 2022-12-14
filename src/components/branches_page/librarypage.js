import React from 'react';
import './librarypage.css';
// function Library(props){
// 	return(
// 		<div class="maincontainer">
// 			<div class="Button1">
// 				{props.}
// 				<button class="button">CSE</button>
// 			</div>
// 	)
// }
//library page to display options(branches) 
/**
 * displays teh branches to choose 
 * @returns returns to the page of respective branch
 */
function LibraryPage() {
	return (
		<div class="maincontainer">
			<div class="Button1">
				<button class="button">CSE</button>
			</div>
			<div class="Button1">
				<button class="button">ECE</button>
			</div>
			<div class="Button1">
				<button class="button">CHEM</button>
			</div>
			<div class="Button1">
				<button class="button">MECH</button>
			</div>
			<div class="Button1">
				<button class="button">MME</button>
			</div>
			<div class="Button1">
				<button class="button">CIVIL</button>
			</div>
		</div>
	)
}
export default LibraryPage;