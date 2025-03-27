import React from 'react'
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 
  return (
    <div>
        <div className="flex justify-center items-center gap-2 mt-4">
        <button 
          className="px-3 py-1 border rounded disabled:opacity-50" 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        >
          <ChevronLeft size={18} />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-[#b68d40] text-white" : "bg-white"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button 
          className="px-3 py-1 border rounded disabled:opacity-50" 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        >
          <ChevronRight size={18} />
        </button>
      </div>
      
    </div>
  )
}

export default Pagination
