import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { MENUIMG_URL } from '../utils/constants';
import { MENU_API } from '../utils/constants';
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {

  // const [resInfo , setResInfo] = useState(null);


  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);


  

  // console.log(resId);
// useEffect(()=>{
// fetchMenu();
// },[])


// const fetchMenu = async ()=>{
// const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=669200");
// const data = await fetch(MENU_API + resId);

// const json = await data.json();
// console.log(json);
// setResInfo(json.data);


// console.log(resInfo?.cards[2]?.card?.card?.info);




// }


console.log("Menu info" ,resInfo);



if(resInfo===null) return (<Shimmer/>) ;


const {name, cuisines ,
  costForTwoMessage
} =  resInfo?.cards[2]?.card?.card?.info;


 const {itemCards}=(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

//Here I  want to filter out all the cateogries of restaurant menu to create my menu page like swiggy's menu page






// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
// console.log(categories);


// console.log(itemCards);


  return ( 
    <div className='text-center '>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines.join(",")} - {costForTwoMessage}  </p> 
      
     {/* Categories accordians */}

    { categories.map((category)=> (
         <RestaurantCategory data={category?.card?.card}/>
    ))}

  

     
      {/* <ul>
      
        {
          itemCards.map((menu)=> {
             return <li key={menu.card.info.id}> {menu.card.info.name} - {(menu.card.info.price)/100 || (menu.card.info.defaultPrice)/100} Rs. <img src= {`${MENUIMG_URL}${menu.card.info.imageId}`}></img> </li>
          } )
        } */}

        


        {/* <li>itemCards[2].card.info.name{}</li>
        <li>{itemCards[3].card.info.name}</li>
        <li>{itemCards[4].card.info.name}</li>
        <li>{itemCards[5].card.info.name}</li> */}


      {/* </ul> */}


    </div>
  )
}

export default RestaurantMenu;
