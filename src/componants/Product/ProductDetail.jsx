import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

export default function ProductDetail() {
  const { productname } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productData.find((p) => p.name === (productname));
    setProduct(foundProduct);
  }, [productname]);

  if (!product) return <p className="text-center text-gray-600">Product not found.</p>;

  return (
    <div className="md:flex max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
       <div>
      <img src={product.imageUrl} alt={product.name} className=" md:w-[481px] md:h-[500px] " />
      </div>
      <div className="ml-20 ">
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 mt-4">Rp {product.discountedPrice || product.originalPrice}</p>
      <h1>Size</h1>
      <button className="mt-6 bg-white text-blackk py-2 px-6 rounded-lg hover:bg-blue-500 border-2 m-2">
        Buy Now
      </button>
      <button className="mt-6 bg-white text-blackk py-2 px-6 rounded-lg hover:bg-blue-500 border-2 ">
        Add To Cart
      </button>
      </div>
    </div>
  );
}
