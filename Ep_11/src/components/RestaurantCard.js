


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
        
        <div className='m-4 p-4 w-[250px] bg-gray-100  text-wrap break-words rounded-lg hover:bg-gray-400   '>
          {/* Res. card should have img name of the restaurant ratings images , price tag review count etc. */}
           <img className=' rounded-lg      '  src= {FOODIMG_URL+ cloudinaryImageId}></img>
          <h3 className="font-bold py- text-lg">{name}</h3>
          <h4>{cuisines.join(',')}</h4>
          <h4>{avgRating}⭐</h4>
          <h4>{resData.info.sla.deliveryTime} Minutes </h4>
          <h4>{costForTwo}</h4>
        </div>
    )
}


    


export default RestaurantCard