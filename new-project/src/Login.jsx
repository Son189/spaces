import React from "react";
import { useState } from "react";
import "./Login.css"
import {Link} from "react-router-dom"
function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setisLoggedIn] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = event => {
        setUsername(event.target.value);
        event.preventDefault();
      };
    
      const handlePasswordChange = event => {
        setPassword(event.target.value);
        event.preventDefault();
      };
   const handleLogin = event => {
        event.preventDefault();
        console.log (username, password)
        setisLoggedIn(true);
        fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Login failed');
            }
          })
          .then(user => {
            onLogin(user);
          })
          .catch(error => {
            console.error(error);
            setErrorMessage('Login failed');
          });
      };
      const handleLogout = () => {

        setisLoggedIn(false);
    };
    
      return(
        <div className="img-y">
         <div  className="l1">
        {isLoggedIn ? (
         <div>
           <p>Hello {username}, Welcome to Spacer where we fill hearts </p>
              <button onClick={handleLogout}>Logout</button>
               </div>
         ) : (
    <form onSubmit={handleLogin}>
     <div>
      <label htmlFor="email_or_username">Email or Username:</label>
      <input type="text" id="email_or_username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
      <Link  className="kk" to='/sign up'><span>Already Login? </span>Signup</Link>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
            )}
        </div>
        </div> 
      )
}
export default  Login