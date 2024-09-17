import { useEffect, useState } from 'react'
import Logo from '../../logo.png'

import { Link } from 'react-router-dom'

import useOnlineStatus from '../utils/useOnlineStatus'

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
    // console.log("useEffect Called");
      },[btnName]);

   const onlineStatus = useOnlineStatus();

    return(
        <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50'>

            <div className='logo-container'>
                <img  className='w-48 bg-none bg-pink-100 sm:bg-yellow-50 lg:bg-green-50'   src={Logo}></img>
            </div> 
            


            <div className='flex items-center'>
           <ul className='flex p-4 m-4'>
            <li className='px-4'>
                Online Status:{onlineStatus ? "✅": "❌" }
            </li>
            <li  className='px-4'>
              <Link to="/">Home</Link>  
                </li>
            <li  className='px-4'>
                <Link to="/about">About US</Link>
                </li>
            <li  className='px-4'>
               <Link to="/contact">Contact Us</Link> 
                </li>
            <li  className='px-4'>Cart🛒</li>
            <button className='login' onClick={()=>{
              btnName==="Login" ? setbtnName("Logout"): setbtnName("Login")
            }}>{btnName}</button>
           </ul>
            </div>

        </div>
    )
}

export default Header