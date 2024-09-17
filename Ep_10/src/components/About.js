import React from 'react'
import about from "../../About.png"
import linkedin from "../../LinkedIn.png"
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className='flex justify-center mt-8'>
      <img src={about} className='rounded-lg w-40 mt-2 '>
      </img>
      </div>

      <div className='flex justify-center font-medium mt-4'>
        Hello, Myself Priyanshu I am a Software Developer and I like to create beautifully designed and responsive web apps. <br></br>
                               
      </div>
       
      <div className='flex justify-center font-medium mt-4'>
   <Link to="https://linkedin.com/in/priyanshu-soni-s27092003"> <img  className='w-10'src={linkedin}></img></Link>  
      </div>
    
</>
   
  )
}

export default About
