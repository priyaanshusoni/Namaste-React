import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{

   // console.log("body rendered");
   
const [resState , SetresState]= useState([]);
 // Store the original list

const[searchText, setSearchtext]= useState("");

const [searchedRestro , setSearchedRestro] = useState([]);

const [originalRestroList , setOriginalrestroList] = useState([]);


console.log("Body rendered" ,resState);



useEffect(()=>{
   // console.log("useEffect Called");
   fetchData();
   
},[]);

const fetchData=async ()=>{
   const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
//optional chaining 
   // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
   SetresState(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   setSearchedRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

   setOriginalrestroList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // changes done 
   
};
// conditional rendering 
// if(resState.length===0){
//   return <Shimmer/>
// }

 const onlineStatus = useOnlineStatus();

 if(onlineStatus==false){
   return <h1>Looks Like You are offline ! Please check your Internet connection. </h1>
 }


 




    return resState.length===0 ?  <Shimmer/> : (
        <div className='body'> 
       <div className='filter flex'>
         <div className=" m-4 p-4 ">
            <input  placeholder="Search Here.."             type="text" className="rounded-md border border-gray-500 hover:border-green-500 " value={searchText} onChange={(e)=>{

                   setSearchtext(e.target.value)
            }} >
            
            
            </input> <button className="px-4 py-2 bg-green-200 m-4 rounded-md "
             onClick={()=>{
               // filter the restaurant cards and update the UI 
               //search text
           
                  //   SetresState(resState.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
            
               setSearchedRestro(resState.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
            
            }}>Search</button>
         </div>

         <div className="m-4 p-4 ">
         <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={()=>{
           SetresState(resState.filter((x)=>x.info.avgRating>4.1))
           setSearchedRestro(resState); // changes done 
        }}>Top Rated restaurant</button>

        <button className="px-4 py-2 bg-gray-300 m-4 rounded-md" onClick={()=>{
          setSearchedRestro(originalRestroList);
        }}>All Restaurants</button>

         </div>
      
        
     
       </div>
       <div className='flex flex-wrap text-wrap'>
        {/* we will use separate component for building restro cards so that we can use it again n again  */}
        {/* <RestaurantCard resData = {resList[0]} />     
        <RestaurantCard resData = {resList[1]} / unoptimized methods>     
        <RestaurantCard resData = {resList[2]} />     
        <RestaurantCard resData = {resList[3]} />     
        <RestaurantCard resData = {resList[4]} />     
        <RestaurantCard resData = {resList[5]} />     
        <RestaurantCard resData = {resList[6]} />     
        <RestaurantCard resData = {resList[7]} />     
        <RestaurantCard resData = {resList[8]} />     
        <RestaurantCard resData = {resList[9]} />     
     */}
     {
      
 searchedRestro.map(restaurant => (
 <Link  key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard  resData={restaurant}/> </Link> ) 

 )
        // optimized method to loop over each object of restaurent data
     }
       
      
       </div>
        </div>
    )
}

export default Body 

//conditional rendering uses ternary operators generally 

