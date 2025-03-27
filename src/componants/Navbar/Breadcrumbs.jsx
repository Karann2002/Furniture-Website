import { useLocation, Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Convert the pathname into an array of breadcrumbs
  const paths = location.pathname
    .split("/")
    .filter((path) => path) // Remove empty strings
    .map((path, index, array) => {
      return {
        name: path.charAt(0).toUpperCase() + path.slice(1), // Capitalize first letter
        link: "/" + array.slice(0, index + 1).join("/"),
      };
    });

  return (
    <div className="p-4 bg-[#FCF8F3]  text-black text-sm">
      <nav className="flex space-x-2">
        <Link to="/" className="hover:underline"></Link>
        {paths.map((crumb, index) => (
          <span key={index} className="flex items-center">
            <span className="mx-1"><IoIosArrowForward/></span>
            <Link to={crumb.link} className="hover:underline">{crumb.name}</Link>
          </span>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
