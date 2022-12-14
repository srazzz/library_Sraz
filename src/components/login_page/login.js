import React from 'react';
import { useState } from "react";
// import LibraryPage from '../branches_page/librarypage';
import "./login.css"

/**
 * this displays the login page with user id and password 
 * @returns returns the page for branches if login success if not displays the error
 */
function LoginPage() {
    const initialValues = {idNumber: "" , password:""}
    const [formErrors, setFormErrors] = useState("")
    const [formValues, setFormValues] = useState(initialValues)

    const handleInput = (event) =>
    {
        const {name , value} = event.target;
        setFormValues({...formValues , [name]: value});
    }

    const validate = (formValues) => {
		console.log(formErrors,formValues)
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
        else if(formValues.password !== formValues.idNumber){
			errors.password = "password not matching ";
		}
		return errors;
	}

    const handleLogin = (event) => {
		setFormErrors(validate(formValues))
		event.preventDefault()
		if(validate(formValues).length === 0){		//not working
			setFormValues(initialValues)
            
		}
	}
    return (
        <>
            <div className="whole-page">
                <div class="login-page">
                    <div class="form">
                        {/* register form  */}
                        <h1>LOGIN</h1>
                        <br/>
                        {/* if already avean account login redirecting  */}
                        <form class="login-form">
                            <div className="form-control">
                                <label htmlFor="username">ID Number</label>
                                <input type="text" id="idNumber" name="idNumber" placeholder="Enter college ID"  onChange={handleInput} />
                                <div className="error">{formErrors.idNumber}</div>
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter password" onChange={handleInput}  />
                                <div className="error">{formErrors.password}</div>
                            </div>
                            <div className="buttonlogin"><button className="buttonlogin"  type="submit" onClick={handleLogin}>submit</button></div>
                           
                            <p class="message">Not registered? <a href="register.html">Create an account</a></p>
                        </form>
                    </div>
                </div></div>
        </>
    )
}
export default LoginPage;