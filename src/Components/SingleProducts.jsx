import React from 'react'

const SingleProducts = ({thumbnail , title , price}) => {
   return (
      <div>
         <div className="productBox">
            <img src={thumbnail} alt="" />
            {/* <h1>{title}</h1>
            <span>{price}$</span> */}
         </div>
      </div>
   )
}

export default SingleProducts
