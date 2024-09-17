
import React from "react";
import ReactDOM from 'react-dom'

// const heading = React.createElement("h1",{id:"heading"},"Hello from ME");


// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/* Now this is not a good way to write and create elements in react it makes our task more complex and lengthy everytime we need to write threee functions to creat a single element on web page .

That's why JSX came into picture */



// const JSXheading = <h1 id="heading"> Namaste People</h1>


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(JSXheading);


// components 


const HeadingComponent=()=>(
    <>
 <h1>Namaste React Functional Component</h1>
 {/* <SecondHeadingComponent/> */}
 {SecondHeadingComponent()} // this is also valid 
 </>
// Component Composition 
);




const SecondHeadingComponent=()=>(
    
      <h1>Namaste React Second Functional Component</h1>
     
)

 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SecondHeadingComponent/>);
root.render(<HeadingComponent/>);





