import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Navbar from "./Componet/Navbar";
import Footer from "./Componet/Footer";
import SearchBar from "./Componet/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vw]">
     <ToastContainer/>
      <Navbar/>
      <SearchBar/>
    <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/collection" element={<Collection/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/product/:productId" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/placeorder" element={<PlaceOrder/>}/>
    <Route path="/orders" element={<Order/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
