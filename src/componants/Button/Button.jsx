const Button = ({ children, onClick, variant = "primary", size = "md", disabled = false }) => {
    const baseStyles = "bg-stone-900 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300";
    
    const variants = {
      primary: "bg-stone-900 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300",
      secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
      danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
      outline: "border border-gray-500 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    };
  
    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  