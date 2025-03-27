import {  useState } from "react";
import Button from "../componants/Button/Button"; 
import { Link, useNavigate } from "react-router-dom";// Import your button component
import axios from "axios";

const SignUp = () => {
    const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin =async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/signup", { name, email, password });
        alert("Signup successful!");
        navigate("/login");
      } catch (error) {
        alert("Signup failed. Try again.");
      }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FCF8F3] p-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg w-full max-w-4xl">
        
        {/* Image Section */}
        <div className=" md:flex md:w-1/2 items-center justify-center p-4">
          <img src="/public/index.png" alt="Living Room" className="w-full h-auto object-fill " />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Furniture SignUp</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
            <label className="block text-gray-700">Name</label>
            <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" size="lg">SignUp</Button>
              </div>
              <p className="mt-4 text-center">
          if have already an account?           <Link to="/login" className="text-blue-500">Login</Link>
        </p>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
