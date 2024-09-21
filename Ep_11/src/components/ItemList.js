import React from 'react'
import { MENUIMG_URL } from '../utils/constants';
const ItemList = ({items}) => {
    console.log("items came",items);
  return (
    <div>
     <ul>
        {items.map((items)=><div key={items.card.info.id}   className='p-2 m-2  border-gray-200 border-b-2 text-left'   >
         
           <img src={MENUIMG_URL+ items.card.info.imageId} className='w-16'></img>

           <div className='py-2'>
            <span>{items.card.info.name}</span>
            <span>- ₹ {items.card.info.price ? items.card.info.price/100 : items.card.info.defaultPrice/100 }</span>
            </div>

            <div>
                <p className='text-xs'>{items.card.info.description} </p>
            </div>

        </div>)}
     </ul>
    </div>
  )
}

export default ItemList
