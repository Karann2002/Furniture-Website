import React from 'react'
import Product from './Product';
import { useState } from 'react';


const ProductData = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const initialLimit = 8;

    const productData = [
       {
        id : 1,
      name: "Sutherine",
      description: "Stylish cafe chair",
      originalPrice: "3,500,000",
      discountedPrice: "2,500,000",
      imageUrl: "/public/Images.png",
    },
    {
        id : 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      originalPrice: "2,500,000",
      imageUrl: "/public/Images (1).png",
    },
    {
        id : 3,
      name: "Lolito",
      description: "Luxury big sofa",
      originalPrice: "14,000,000",
      discountedPrice: "7,000,000",
      imageUrl: "/public/Images (2).png",
    },
    { id : 3,
      name: "Respira",
      description: "Outdoor bar table and stool",
      originalPrice: "500,000",
      imageUrl: "/public/Images (3).png",
    },
    {
        id : 4,
      name: "Grifo",
      description: "Night lamp",
      originalPrice: "1,500,000",
      imageUrl: "/public/Images (4).png",
    },
    {
        id : 5,
      name: "Muggo",
      description: "Small mug",
      originalPrice: "150,000",
      imageUrl: "/public/Images (5).png",
    },
    {
        id : 6,
      name: "Pingky",
      description: "Cute bed set",
      originalPrice: "14,000,000",
      discountedPrice: "7,000,000",
      imageUrl: "/public/Images (8).png",
    },
    {
        id : 7,
      name: "Potty",
      description: "Minimalist flower pot",
      originalPrice: "500,000",
      imageUrl: "/public/image 8.png",
    },
    {
        id : 8,
        name: "Grifo",
        description: "Night lamp",
        originalPrice: "1,500,000",
        imageUrl: "/public/Images (4).png",
      },
      {
        id : 9,
        name: "Muggo",
        description: "Small mug",
        originalPrice: "150,000",
        imageUrl: "/public/Images (5).png",
      },
      {
        id : 10,
        name: "Pingky",
        description: "Cute bed set",
        originalPrice: "14,000,000",
        discountedPrice: "7,000,000",
        imageUrl: "/public/Images (8).png",
      },
      { id : 11,
        name: "Potty",
        description: "Minimalist flower pot",
        originalPrice: "500,000",
        imageUrl: "/public/image 8.png",
      },
      {
        id : 12,
        name: "Sutherine",
        description: "Stylish cafe chair",
        originalPrice: "3,500,000",
        discountedPrice: "2,500,000",
        imageUrl: "/public/Images.png",
      },
      {
        id : 13,
        name: "Leviosa",
        description: "Stylish cafe chair",
        originalPrice: "2,500,000",
        imageUrl: "/public/Images (1).png",
      },
      {
        id : 14,
        name: "Lolito",
        description: "Luxury big sofa",
        originalPrice: "14,000,000",
        discountedPrice: "7,000,000",
        imageUrl: "/public/Images (2).png",
      },
      {
        id : 15,
        name: "Respira",
        description: "Outdoor bar table and stool",
        originalPrice: "500,000",
        imageUrl: "/public/Images (3).png",
      },
      {
        id : 16,
        name: "Grifo",
        description: "Night lamp",
        originalPrice: "1,500,000",
        imageUrl: "/public/Images (4).png",
      },
          {
            id : 17,
        name: "Muggo",
        description: "Small mug",
        originalPrice: "150,000",
        imageUrl: "/public/Images (5).png",
      },
      {
        id : 18,
        name: "Pingky",
        description: "Cute bed set",
        originalPrice: "14,000,000",
        discountedPrice: "7,000,000",
        imageUrl: "/public/Images (8).png",
      },
      {
        id : 19,
        name: "Potty",
        description: "Minimalist flower pot",
        originalPrice: "500,000",
        imageUrl: "/public/image 8.png",
      }, {
        id : 20,
        name: "Sutherine",
        description: "Stylish cafe chair",
        originalPrice: "3,500,000",
        discountedPrice: "2,500,000",
        imageUrl: "/public/Images.png",
      },
      {
        id : 21,

        name: "Leviosa",
        description: "Stylish cafe chair",
        originalPrice: "2,500,000",
        imageUrl: "/public/Images (1).png",
      },
      {
        id : 22,
        name: "Lolito",
        description: "Luxury big sofa",
        originalPrice: "14,000,000",
        discountedPrice: "7,000,000",
        imageUrl: "/public/Images (2).png",
      },
      {
        id : 23,
        name: "Respira",
        description: "Outdoor bar table and stool",
        originalPrice: "500,000",
        imageUrl: "/public/Images (3).png",
      },
      {
        id : 24,
        name: "Grifo",
        description: "Night lamp",
        originalPrice: "1,500,000",
        imageUrl: "/public/Images (4).png",
      },
     
  ];

 
  const displayedProducts = isExpanded ? productData : productData.slice(0, initialLimit);
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Product Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
          {displayedProducts.map((product, id) => (
            <Product 
           

              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
      {productData.length > initialLimit && (
        <div className="flex justify-center mt-6">
          <button 
            className="bg-amber-300 text-white font-bold py-2 px-10 border-2 border-amber-300  shadow-md 
                       hover:bg-amber-400 transition duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductData
