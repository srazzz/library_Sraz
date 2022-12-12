// This is the registration form when they don't have an account
function Register(){
    return(
        <div className="container">
        <form>
            {/* Form to register into the library if they are new */}
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <label for="email"><b>College ID</b></label>
            <input type="text" name="username" placeholder="Enter your ID number" required/>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter your College E-Mail" name="email" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <label for="email"><b>Phone Number</b></label>
            <br/>
            <select name="phoneCode" required>
                <option selected hidden value="">Code</option>
                <option value="66">+98</option>
                <option value="66">+99</option>
                <option value="66">+90</option>
                <option value="66">+66</option>
            </select>
            <input type="phone" name="phone" placeholder="812345678" required/>

            <p>By creating an account you agree to our <a href="a" >Terms & Privacy</a>.</p>
            
            <div className="clearfix">
                <a href="librarypage.html">
                <button type="submit" className="btn">Sign Up</button></a>
            </div>
   
    </form> </div>


    )
}
export default Register;