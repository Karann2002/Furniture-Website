import  {Sliders, Grid, List} from 'lucide-react'

export default function FilterBar() {
  // Change this based on total pages

  return (
    <div className="bg-[#f9f5f0] p-4 w-full">
      {/* Top Filter Bar */}
      <div className="flex justify-between items-center border-b pb-4">
        {/* Left Section - Filter & Layout Toggle */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-700 font-semibold">
            <Sliders size={18} />
            Filter
          </button>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-200 rounded">
              <Grid size={18} />
            </button>
            <button className="p-2 bg-gray-200 rounded">
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Middle Section - Showing Results */}
        <p className="text-gray-700">Showing 1–16 of 32 results</p>

        {/* Right Section - Sort & Show */}
        <div className="flex items-center gap-3">
          <span className="text-gray-700">Show</span>
          <input type="number" value="16" className="w-12 text-center border rounded px-2 py-1" />
          <span className="text-gray-700">Sort by</span>
          <select className="border rounded px-3 py-1">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

    
      
    </div>
  );
}
