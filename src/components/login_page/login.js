import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom'
// import LibraryPage from '../branches_page/librarypage';
// import LibraryPage from '../branches_page/librarypage';
// import { Navigate } from "react-router-dom";
import "./login.css"

/**
 * this displays the login page with user id and password 
 * @returns returns the page for branches if login success if not displays the error
 */
function LoginPage() {
	const initialValues = { idNumber: "", password: "" }
	const [formErrors, setFormErrors] = useState("")
	const [formValues, setFormValues] = useState(initialValues)

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	}

	const validate = (formValues) => {
		// console.log(formErrors,formValues)
		const errors = {}
		if (!formValues.idNumber) {

			errors.idNumber = "user name required!"
		}
		if (!formValues.password) {
			errors.password = "Password is required";
		} else if (formValues.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		} else if (formValues.password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		}
		else if (formValues.password !== formValues.idNumber) {
			errors.password = "password not matching ";
		}
		return errors;
	}

	// when user click on login it will call the validate function to check the details are valid
	const handleLogin = (event) => {
		setFormErrors(validate(formValues))
		event.preventDefault()

		// testing fetch api
		fetch('https://fakestoreapi.com/products/1')
			.then(res => res.json())
			.then(json => console.log(json))
		// 	fetch('http://example.com/movies.json')
		// .then((response) => response.json())
		// .then((data) => console.log(data));
		// (formErrors.length === 0) ?

		//      '<Link to ="/LibraryPage " ><LibraryPage/></Link>': null
		//   }
		//   return <GuestGreeting />;
		// }
		// if(validate(formValues).length === 0){		//not working
		// 	setFormValues(initialValues)
		// console.log('redirect.............--------------------========................................................---------')
		//     return <Navigate to="/Branches"/>

		// }
	}
	return (
		<>
			<div className="whole-page">
				<div class="login-page">
					<div class="form_login">
						{/* register form  */}
						<h1>LIBRARIAN LOGIN</h1>
						<br />
						{/* if already avean account login redirecting  */}
						<form class="login-form">
							<div className="form-control">
								<label htmlFor="username">ID Number</label>
								<input type="text" id="idNumber" name="idNumber" placeholder="Enter college ID" onChange={handleInput} />
								<div className="error">{formErrors.idNumber}</div>
							</div>
							<div className="form-control">
								<label htmlFor="password">Password</label>
								<input type="password" id="password" name="password" placeholder="Enter password" onChange={handleInput} />
								<div className="error">{formErrors.password}</div>
							</div>
							<div>
								<button className="buttonlogin" type="submit" onClick={handleLogin}>submit</button>
							</div>

							<p class="message">Not registered? <Link to="/Register">Create an account</Link></p>
							<p class="message"><Link to="/Forget_password">Forget password</Link></p>
						</form></div>
				</div>c
			</div>
		</>
	)
}
export default LoginPage;
