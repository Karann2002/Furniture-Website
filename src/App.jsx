import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./componants/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetail from "./componants/Product/ProductDetail";
import Breadcrumbs from "./componants/Navbar/Breadcrumbs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./auth/ProtectedRoutes/ProtectedRoutes";
function App() {
  return (
    <Router>
      <Navbar />
      <Breadcrumbs/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productname" element={<ProductDetail />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        </Route>
       
        


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
