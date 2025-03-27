export default function Footer() {
    return (
      <footer className="bg-white text-gray-700 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo & Address */}
          <div>
            <h2 className="text-2xl font-bold text-black text-left">FurnitureWala.</h2>
            <p className="text-sm text-gray-500 mt-2">
              Indore ,Ind
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Links</h3>
            <ul className="mt-2 space-y-2">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Help</h3>
            <ul className="mt-2 space-y-2">
              {["Payment Options", "Returns", "Privacy Policies"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
            <div className="mt-3 flex items-center border-b border-gray-400 pb-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent text-sm flex-1 outline-none"
              />
              <button className="text-black font-semibold hover:underline">SUBSCRIBE</button>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t mt-8 pt-4  text-gray-500 text-sm">
          © 2025 FurnitureWala. All rights reserved.
        </div>
      </footer>
    );
  }
  