
import { useRouteError } from "react-router-dom";




import React from "react";

const Error=()=>{

const err= useRouteError();

console.log(err);
    return (
        <div>
           
            <h1>Oops! Something Went Wrong!🫣🤓</h1> <br></br>

            <h2>{err.data}  <br></br> {err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error

