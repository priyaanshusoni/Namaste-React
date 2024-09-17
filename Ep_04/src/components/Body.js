import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";

const Body = ()=>{

   // console.log("body rendered");
   
const [resState , SetresState]= useState([]);
 // Store the original list

const[searchText, setSearchtext]= useState("");

const [searchedRestro , setSearchedRestro] = useState([]);
useEffect(()=>{
   // console.log("useEffect Called");
   fetchData();
   
},[]);

const fetchData=async ()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
//optional chaining 
   console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
   SetresState(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   setSearchedRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
};
// conditional rendering 
// if(resState.length===0){
//   return <Shimmer/>
// }
    return resState.length===0 ?  <Shimmer/> : (
        <div className='body'> 
       <div className='filter'>
         <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{

                   setSearchtext(e.target.value)
            }} >
            
            
            </input> <button onClick={()=>{
               // filter the restaurant cards and update the UI 
               //search text
           
                  //   SetresState(resState.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
            
               setSearchedRestro(resState.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
            
            }}>Search</button>
         </div>
        <button className="filter-btn" onClick={()=>{
           SetresState(resState.filter((x)=>x.info.avgRating>4.1))
        }}>Top Rated restaurant</button>

       </div>
       <div className='res-container'>
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
 <Link  key={restaurant.info.id}      to={"/restaurants/"+ restaurant.info.id}><RestaurantCard  resData={restaurant}/> </Link> ) 

 )
        // optimized method to loop over each object of restaurent data
     }
       
      
       </div>
        </div>
    )
}

export default Body 

//conditional rendering uses ternary operators generally 

