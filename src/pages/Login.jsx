import { useState } from "react";
import Button from "../componants/Button/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FCF8F3] p-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg w-full max-w-4xl">
        {/* Image Section */}
        <div className=" md:flex md:w-1/2 items-center justify-center p-4">
          <img
            src="/public/Image-living room.png"
            alt="Living Room"
            className="w-full h-auto  "
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Furniture Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
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
              <Button type="submit" size="lg">
                Login
              </Button>
            </div>
          </form>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
