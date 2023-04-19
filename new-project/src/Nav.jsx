import React from "react";
import { Link} from "react-router-dom"
import './Nav.css'
    
function Nav (){
 return (
<div>
<nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className= "lt">
     <button> <Link to="/">Home</Link></button>
     <button><Link to="/about">About</Link></button> 
     <button><Link to="/contact">Contact</Link></button>
     <button><Link to="/sign up">Signup</Link></button>
     <button><Link to="/login">Login</Link></button>
      </div>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
 }
 export default Nav