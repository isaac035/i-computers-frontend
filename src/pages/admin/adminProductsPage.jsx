import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AdminProductsPage(){
    return(
        <div className="w-full h-full flex flex-col bg-accent/10">
            <Link to="/admin/add-product" className="w-[80px] h-[80px] bg-accent text-white rounded-full text-2xl flex items-center justify-center fixed right-[35px] bottom-[35px] hover:scale-[1.3] transition duration-200">
                 <FaPlus />
            </Link>
        </div>
    )
}