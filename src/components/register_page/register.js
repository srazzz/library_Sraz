// This is the registration form when they don't have an account
import React from 'react';
import {useState} from 'react';
import './register.css'
/**
 * displays the register page when user don't have an account
 * @returns returns to the login page if all details are given properly
 */
function Register() {
    const initialValues = { idNumber: "", email: "",phone: "", password: "" ,password2: "" };
	const [formValues, setFormValues] = useState(initialValues)
	const [formErrors, setFormErrors] = useState("")

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value }); //doubt?
	}

	const validate = (formValues) => {
		console.log(formErrors,formValues)
		const errors = {}
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!formValues.idNumber) {

			errors.idNumber = "ID required!"
		}
        if (!formValues.phone) {

			errors.phone = "ID required!"
		}
		if (!formValues.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(formValues.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!formValues.password) {
			errors.password = "Password is required";
		} else if (formValues.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		} else if (formValues.password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		}
		if(!formValues.password2) {
			errors.password2 = "Re-enter the password";
		} else if (formValues.password2 !== formValues.password){
			errors.password2 = "password not matching ";
		}
		return errors;
	}

	const handleSubmit = (event) => {
		setFormErrors(validate(formValues))
		event.preventDefault()
		if(validate(formValues).length === 0){		//not working
			setFormValues(initialValues)
		}
	}

    return (
		<>
        <div className='background'>
        <div className="container">
            <form >
                {/* Form to register into the library if they are new */}
                <h1>Register</h1>
                <br />
                <div classNmae="form-control">
                    <label for="email"><b>College ID</b></label>
                    <input type="text" name="idNumber" placeholder="Enter your ID number" onChange={handleInput} />
                    <div className="error">{formErrors.idNumber}</div>
                </div>
                <div classNmae="form-control">
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter your College E-Mail" name="email" onChange={handleInput}/>
                    <div className="error">{formErrors.email}</div>
                </div>
                <div classNmae="form-control">
                    <label for="email"><b>Phone Number</b></label>
                    <input type="phone" name="phone" placeholder="812345678"  onChange={handleInput}/>
                    <div className="error">{formErrors.phone}</div>
                </div>
                <div classNmae="form-control">
                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password"  onChange={handleInput}/>
                    <div className="error">{formErrors.password}</div>
                </div>
                <div classNmae="form-control">
                    <label for="password"><b>Confirm Password</b></label>
                    <input type="password" placeholder="ReEnter Password" name="password2"  onChange={handleInput}/>
                    <div className="error">{formErrors.password2}</div>
                </div>

                <div className="clearfix">
                    <a href="librarypage.html">
                        <button type="submit" className="btn" onClick={handleSubmit}>Sign Up</button></a>
                </div>

            </form> </div></div>

			</>
    )
}
export default Register;