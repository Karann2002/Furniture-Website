import React from 'react'
import ProductData from '../componants/Product/ProductData'
import FilterBar from '../componants/FilterBar/FilterBar'
import Pagination from '../componants/FilterBar/Pagination'

const Shop = () => {
  return (
    <div className='justify-center items-center w-full'>
      <div className="flex justify-center items-center w-full">
  <img src="/public/Group 78.png" alt="" className="max-w-full h-auto" />
  
</div>
<div className='filterbar'>


  <FilterBar/>
</div>
<div>
    <ProductData/>
  </div>
<div>
  <Pagination/>
</div>
<div className='flex justify-center items-center w-full p-5 '>
  <img src="/public/Frame 161.png" alt="" />
</div >
    </div>

  )
}

export default Shop
