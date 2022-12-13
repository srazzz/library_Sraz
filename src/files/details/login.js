import React from 'react';

import "./login.css"
function LoginPage(){
    return (
        <>
        <div className="whole-page">
        <div class="login-page">
        <div class="form">
            {/* register form  */}
            <h1>LOGIN</h1>
            <form class="register-form">
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button>create</button>
                <p class="message">Already registered? <a href="a">Sign In</a></p>
                {/* here we have to add the library page afetr login  */}
            </form>
            {/* if already avean account login redirecting  */}
            <form class="login-form">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button className= "buttonlogin " onclick="location.href=librarypage.html">login</button>
                <br/><br/>
                <p class="message">Not registered? <a href="register.html">Create an account</a></p>
            </form>
        </div>
        </div></div>
        </>
    )
}
export default LoginPage;
