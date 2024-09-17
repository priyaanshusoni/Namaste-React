import { useEffect, useState } from 'react'
import Logo from '../../logo.jpg'

import { Link } from 'react-router-dom'

const Header = ()=>{

    const [btnName, setbtnName] = useState("Login")
//  function changeName(){
//    let btn =  document.querySelector("button");
//    btn.innerText= "Logout";
//  }


//if no dependency array-> useEffect will call on every render
//if dependency array is empty ->  it will be called on the first render only 
//if something is in dependency  array is there then use effect will be called everytime the dependency changes 
useEffect(()=>{ //understanding useEffect 
    console.log("useEffect Called");
      },[btnName]);

    return(
        <div className='header'>

            <div className='logo-container'>
                <img src={Logo}></img>
            </div> 
            


            <div className='nav-items'>
           <ul>
            <li>
              <Link to="/">Home</Link>  
                </li>
            <li>
                <Link to="/about">About US</Link>
                </li>
            <li>
               <Link to="/contact">Contact Us</Link> 
                </li>
            <li>Cart</li>
            <button className='login' onClick={()=>{
              btnName==="Login" ? setbtnName("Logout"): setbtnName("Login")
            }}>{btnName}</button>
           </ul>
            </div>

        </div>
    )
}

export default Header