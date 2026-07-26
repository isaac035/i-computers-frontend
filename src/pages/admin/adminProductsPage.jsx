import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import toast from "react-hot-toast";
import api from "../../lib/api";
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";


export default function AdminProductsPage(){
     const [products, setProducts] = useState([]);
     
     useEffect(
        () => {
            const token = localStorage.getItem("token") 
            api.get("/products", {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then((response) => {
                setProducts(response.data)
        })},
        [])


    return(
        <div className="w-full max-h-full flex flex-col p-4 overflow-y-scroll items-start gap-0 ">


            <div className="w-full h-[100px] bg-white shadow rounded-b-md flex items-center p-4 justify-between mb-8">

                <h1 className="text-2xl font-semibold text-secondary ml-2">Add Product</h1>

                <div className="flex gap-2">
                   {products.length} Products
                
                </div>
             </div>

             <table className="w-full bg-white shadow rounded-md overflow-hidden text-center">
                 <thead className="bg-accent text-white h-[60px]">
                     <tr className="border-b">
                         <th>Image</th>
                         <th className="py-2 px-4 text-left">ID</th>
                         <th className="py-2 px-4 text-left">Name</th>
                         <th className="py-2 px-4 text-left">Price</th>
                         <th className="py-2 px-4 text-left">Labeled Price</th>
                         <th className="py-2 px-4 text-left">Stock</th>
                         <th className="py-2 px-4 text-left">Is Available</th>                         
                         <th className="py-2 px-4 text-left">Brand</th>
                         <th className="py-2 px-4 text-left">Model</th>
                         <th className="py-2 px-4 text-left">Actions</th>

                     </tr>
                 </thead>
                 <tbody>
                    {products.map((items) => {
                        return(
                            <tr key={items.productId} className="border-b odd:bg-gray-200">
                                <td className="py-2 px-4"><img src={items.images?.[0]} className="w-[50px] h-[50px] object-cover"/></td>
                                <td className="py-2 px-4">{items.productId}</td>
                                <td className="py-2 px-4">{items.name}</td>
                                <td className="py-2 px-4">{items.price}</td>
                                <td className="py-2 px-4">{items.labeledPrice}</td>
                                <td className="py-2 px-4">{items.stock}</td>
                                <td className="py-2 px-4">{items.isAvailabel ? "Yes" : "No"}</td> 
                                <td className="py-2 px-4">{items.brand}</td>
                                <td className="py-2 px-4">{items.model}</td>
                                <td>  
                                    <div className="flex gap-2 justify-center">
                                        <CiEdit />
                                        <CiTrash /> 
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                 </tbody>
                        
             </table>

            <Link to="/admin/add-product" className="w-[80px] h-[80px] bg-accent text-white rounded-full text-2xl flex items-center justify-center fixed right-[35px] bottom-[35px] hover:scale-[1.3] transition duration-200">
                 <FaPlus />
            </Link>
        </div>
    )
}