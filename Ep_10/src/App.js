import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom'
import About from './components/About';
import ContactUS from './components/ContactUS';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = ()=>{
    return(
        <div className='app'>

          {/* Header  */}
          <Header/>
        
       {/* if path ==-> / then, body  */}
      
       {/* if path is /about then About */}
      
       {/* if path is /contact then contact US */}
          
         <Outlet/>



         { /*  //footer  */}


        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            
            },
                {
                    path: "/about",
                    element: <About/>,
                   
                },
                {
                    path: "/contact",
                    element: <ContactUS/>,
                  
                },

                {
                      path: "/restaurants/:resId",
                      element: <RestaurantMenu/>
                },

                
            
        ],
        errorElement: <Error/>

    }
    
]);



// const heading = React.createElement("h1",{},"Hello");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>);

