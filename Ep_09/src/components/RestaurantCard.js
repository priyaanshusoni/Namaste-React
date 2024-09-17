


import {FOODIMG_URL} from "../utils/constants";



const RestaurantCard = ({resData})=>{

    // console.log(resData);
    // destructuring objects
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo
        

    } = resData?.info;



    return(
        
        <div className='res-card'>
          {/* Res. card should have img name of the restaurant ratings images , price tag review count etc. */}
           <img className='res-logo'  src= {FOODIMG_URL+ cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h4>{cuisines.join(',')}</h4>
          <h4>{avgRating}</h4>
          <h4>{resData.info.sla.deliveryTime} Minutes </h4>
          <h4>{costForTwo}</h4>
        </div>
    )
}


    


export default RestaurantCard