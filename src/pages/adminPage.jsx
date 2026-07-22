import { Link, Route, Routes } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import AdminProductsPage from "./admin/adminProductsPage.jsx";
import AddProductForm from "./admin/adminAddProductForm.jsx";


export default function AdminPage(){
    return(
        <div className="w-full h-full flex">
            <div className="h-full w-[350px] shadow-2xl text-secondary flex flex-col">

                <div className="w-full h-[100px] text-white bg-accent flex items-center gap-5 p-2 mb-3 ">
                
                   <img src="/iLogo.png" className="h-full"/> 
                   <span className="text-2xl font-bold"> Admin</span>

                </div>

                <Link to="/admin" className="w-full flex items-center p-2 text-2xl gap-3 mb-2.5 hover:bg-accent hover:text-white hover:scale-[1.02] transition duration-300"> <FaShoppingCart className="text-4xl"/>Oders</Link>
                <Link to="/admin/products" className="w-full flex items-center p-2 text-2xl gap-3 mb-2.5 hover:bg-accent hover:text-white hover:scale-[1.02] transition duration-300 "><IoStorefrontOutline className="text-4xl"/>Products</Link>
                <Link to="/admin/users"className="w-full flex items-center p-2 text-2xl gap-3 mb-2.5 hover:bg-accent hover:text-white hover:scale-[1.02] transition duration-300 "><FaUserAlt className="text-4xl"/>Users</Link>

            </div> 

            <div className="w-[calc(100%-360px)] h-full bg-primary">

                <Routes>
                    <Route path="/" element={<h1>Oders Page</h1>}>Oders Page</Route>
                    <Route path="/products" element={<AdminProductsPage />}></Route>
                    <Route path="/users" element={<h1> Users Page</h1>}>Users Page</Route>
                    <Route path="/add-product" element={<AddProductForm />}></Route>

                </Routes>


            </div>
        </div>
    )
} 