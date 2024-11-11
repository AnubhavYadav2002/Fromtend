import React, { useState } from 'react'

const Card = ({id,name,info,image,price,removeTour}) => {
    const [readmore,setReadmore] = useState(false)
    const description = readmore ? info : `${info.substring(0,200)}....`
    function readmoreHandler(){
        setReadmore(!readmore)
    }
  return (
    <div className='card'>
        <div className='Tour-imgs'>
            <img className='Tour-img' src={image}/>
        </div>

        <div className='tour-info'>
        <div className='Tour-details'>
            <h4 className='Tour-price'> ₹{price}</h4>
            <h4 className='Tour-name'>{name}</h4>
        </div>
        <div className='Tour-description'>
            {description}
            <span className='readmorebtn' onClick={readmoreHandler}>
          {  readmore ? `Show Less` : `Show More`
          }
            </span>  
        </div>

        <button className='int-btn' onClick={()=>removeTour(id)}>
            Not Interested
        </button>

        </div>
      

    </div>
  )
}

export default Card