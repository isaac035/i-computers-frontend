import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import uploadMedia from "../../lib/uploadMedia";
import { CiCircleInfo } from "react-icons/ci";
import api from "../../lib/api";
import LoadingAnimation from "../../components/loadingAnimation";

export default function AddProductForm(){

    const [productId, setProductId] = useState("")
    const [name, setName] = useState("")
    const [altNames, setAltNames] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState([])
    const [price, setPrice] = useState("")
    const [labeledPrice, setlabeledPrice] = useState("")
    const [stock, setStock] = useState("")
    const [isAvailabel, setIsAvailabel] = useState(true)
    const [category, setCategory] = useState("Laptop")
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSave() {
        setLoading(true)
        const token = localStorage.getItem("token")
        if(token == null){
            toast.error("You are not logged in")
            navigate("/login")
            return
        }

        const productData = {
            productId : productId,
            name : name,
            altNames : [],
            description : description,
            images : [],
            price : price,
            labeledPrice : labeledPrice,
            stock : stock,
            isAvailabel : isAvailabel,
            category : category,
            brand : brand,
            model : model
        }

        try{

            const imageUploadPromises = []

            for(let i = 0;i<images.length;i++){
                imageUploadPromises[i] = uploadMedia(images[i])
            }

            productData.images = await Promise.all(imageUploadPromises)
            

            productData.altNames = altNames.split(",")

            await api.post("/products",productData,{
            headers : {
                Authorization : "Bearer "+token
            }
            })

            toast.success("Succesfully add Products")

            navigate("/admin/products")

        }catch(err){
            console.log(err)
            toast.error("Failed to add Product")
            setLoading(false)
        }

        
}

    return(
        <div className="w-full max-h-full flex flex-wrap p-4 overflow-y-scroll items-start gap-0 ">

            
             {loading && <LoadingAnimation/>}

            <div className="w-full h-[100px] bg-white shadow rounded-b-md flex items-center p-4 justify-between mb-8">

                <h1 className="text-2xl font-semibold text-secondary ml-2">Add Product</h1>

                <div className="flex gap-2">

                    <Link to ="/admin/products" className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"> Cancel </Link>
                    <button className="p-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-800" onClick={handleSave}> Save</button>

                </div>


            </div>

            <div className="w-[15%]  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Product ID</label>

            <input type="text" value={productId} onChange={(e)=>setProductId(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-[40%]  flex flex-col p-2 h-[100px] items-start">

            <label className="text-secondary text-lg font-semibold mb-2"> Product Name</label>

            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-[45%]  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2 flex items-center gap-2"> Alternative Names <span className="h-full flex items-center italic font-thin"> <CiCircleInfo /> comma-seperated</span></label>

            <input type="text" value={altNames} onChange={(e)=>setAltNames(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-full  flex flex-col p-2">

            <label className="text-secondary text-lg font-semibold mb-2"> Description</label>

            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full h-[100px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>


            <div className="w-[40%]  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Images</label>

            <input type="file" multiple = {true} onChange={(e)=>setImages(e.target.files)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-[30%]  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Price</label>

            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-[30%]  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Labelled Price</label>

            <input type="text" value={labeledPrice} onChange={(e)=>setlabeledPrice(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-1/4  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Stock</label>

            <input type="number" value={stock} onChange={(e)=>setStock(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-1/4  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Availability </label>

            <select value={isAvailabel} onChange={(e)=>setIsAvailabel(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 ">
                <option value={true}>Availabel</option>
                <option value={false}>Unavailabel</option>
            </select>
      
            </div>

            <div className="w-1/2 flex flex-col p-2 h-[100px]"></div>

            
            <div className="w-1/4  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Category </label>

            <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 ">
                <option value="Laptop">Laptop</option>
                <option value="Desktop">Desktop</option>
                <option value="Monitor">Monitor</option>
                <option value="Storage">Storage</option>
                <option value="RAM">RAM</option>
                <option value="Printer">Printer</option>
                <option value="Graphics Card">Graphics Card</option>
                <option value="Mouse">Mouse</option>
                <option value="Accessories">Accessories</option>
                <option value="Keyboard">Keyboard</option>
            </select>
      
            </div>


            <div className="w-1/4  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Brand </label>

            <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>

            <div className="w-1/4  flex flex-col p-2 h-[100px]">

            <label className="text-secondary text-lg font-semibold mb-2"> Model </label>

            <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} className="w-full h-[40px] rounded-md border-2 border-gray-300 p-2 mb-4"/>
            
            </div>






           

            
        </div>
    )
}

// email
// firstName
// lastName
// password
// isAdmin
// isBlocked
// isEmailVerified
// image