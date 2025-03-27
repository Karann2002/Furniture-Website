import React from 'react'
import { FaRegHeart, FaCodeCompare  } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Product = ({id,imageUrl,name,description,originalPrice ,discountedPrice}) => {


    const navigate = useNavigate();

  return (
    <div key={id}
    className="max-w-sm rounded-lg hover:bg-slate-100 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
    onClick={() => navigate(`/product/${name}`)}> 
      {/* Product Image */}
      <img className="w-full h-48 object-cover hover:bg-blue-700" src={imageUrl} alt={name} />

      {/* Product Details */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* Pricing */}
      <div 
       className="px-6 pt-2 pb-4">
        {discountedPrice ? (
          <>
            <span className="text-gray-500 line-through mr-2">Rp {originalPrice}</span>
            <span className="text-red-600 font-bold">Rp {discountedPrice}</span>
          </>
        ) : (
          <span className="text-gray-900 font-bold">Rp {originalPrice}</span>
        )}
      </div>

      {/* Actions */}
      <div className="px-6 pt-4 pb-6 flex justify-between items-center">
        <button className="bg-stone-900 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Add to cart
        </button>
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
          <FaShareAlt />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
          <FaCodeCompare />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
          <FaRegHeart/>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Product
