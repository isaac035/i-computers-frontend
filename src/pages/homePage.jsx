import { Route ,Routes } from "react-router-dom";
import Header from "../components/header.jsx";  
import ProductsPage from "./productsPage.jsx";
import ProductOverview from "./productOverview.jsx";

export default function  HomePage(){
    return(
        <div className="w-full min-h-full flex flex-col bg-primary">
            <Header/>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>}></Route>
                <Route path="/about-us" element={<h1>About Page</h1>}></Route>
                <Route path="/products" element={<ProductsPage/>}></Route>
                <Route path="/overview/:productId" element={<ProductOverview/>}></Route>
                <Route path="/*" element={<h1>404 Page</h1>}></Route>
            </Routes>
            
        </div>
    )
}