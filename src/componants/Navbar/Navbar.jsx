import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes,FaSearch,FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";




export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  
  
 // Logout Function
 const handleLogout = () => {
  localStorage.removeItem("token");
  
  
  navigate("/login");
};


  return (
    <nav className="bg-[#FCF8F3]  text-black p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">FurnitureWala</Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Nav Links */}
        <div className={`md:flex items-center space-x-15 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/shop" className="hover:text-gray-400">Shop</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
         </div>
        <div className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/user" className="hover:text-gray-400 "><FaRegUser /></Link>
          <Link to="/search" className="hover:text-gray-400"><FaSearch /></Link>
          <Link to="/favorite" className="hover:text-gray-400"><FaRegHeart /></Link>
          <Link to="/cart" className="hover:text-gray-400"><MdOutlineShoppingCart /></Link>
          {/* <Link to="/login" className="hover:text-gray-400">Login</Link> */}
          <div>
        {token ? (
          <>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login" className="bg-black-500 px-4 py-2 rounded">Login</Link>
        )}
      </div>
        </div>
      </div>
    </nav>
  );
}
