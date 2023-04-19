import React, {useState , useEffect} from "react";
import qw from "./images/pic1.jpg"
import wq from "./images/pic2.jpg"
import qwe from "./images/pic6.jpg"
import qwer from "./images/pic5.jpg"
import qwert from "./images/tm1.jpg"
import as from "./images/tm2.jpg"
import asl from "./images/tm3.jpg"
import './Home.css'
import { Link } from "react-router-dom";


function Home(){
const [image,setimage]=useState(0)
const images=[qw,wq,qwe,qwer,qwert]
useEffect(()=>{
    const interval = setInterval(()=>{
        setimage((image + 1) % images.length)

    },7000);
    return () => clearInterval(interval);
},[image , images.length]);

    return(
    <div>
       <div className="container">
       <img className='image' src={images[image]} alt="change" />     
       <h1>Best spaces</h1>
       <button className="btnnn">
       <Link to='/booking'>Reserve your space</Link>
       </button>
       </div>

        </div>
    )
}
export default Home;