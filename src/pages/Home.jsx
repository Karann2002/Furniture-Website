import React from 'react'
import index from "../../public/index.png"
// import { Button } from "@material-tailwind/react";


import CardData from '../componants/Cards/CardData';
import ProductData from '../componants/Product/ProductData';
import ImageCarousel from '../componants/Inspiration/ImageCarousel';
import AnimatedImageGrid from '../componants/AnimatedImageGrid/AnimatedImageGrid';


const Home = () => {
  
  return (
    
    <div className='m-10'>
     
<img className="h-auto max-w-full object-cover rounded-md" src={index} alt="image description"/>

{/* <div className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-white/80 flex flex-col justify-right item-right p-10 rounded-l-lg shadow-lg">
        <p className="text-sm text-gray-600 uppercase">New Arrival</p>
        <h2 className="text-4xl font-bold text-gray-900">
          Discover Our <br /> New Collection
        </h2>
       
        <button className="mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition h-[74px] w-[222px]">
          BUY NOW
        </button>
      </div> */}
      <div className='w-auto text-4xl font-bold text-gray-900 m-5 p-10 bg-slate-400'>
        <h1>Browse The Range</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className='flex m-10 gap-10 justify-center'>
      <CardData/>
      </div>

      <div className='Products justify-center'>
        
        <ProductData/>
      </div>
      <div className='inspirtion'>
        <ImageCarousel/>
      </div>
      <div>
        <AnimatedImageGrid/>
      </div>

    </div>
  )
}

export default Home
