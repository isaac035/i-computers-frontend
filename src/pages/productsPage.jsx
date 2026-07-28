import { useState } from "react"
import { useEffect } from "react"
import toast from "react-hot-toast"
import api from "../lib/api"
import LoadingAnimation from "../components/loadingAnimation"
import ProductCard from "../components/productCard"

export default function  ProductsPage(){
    const [product,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=>{

            if(loading){
                api.get("/products")
                .then((res)=>{
                    setProducts(res.data)
                    setLoading(false)
                })
                .catch((err)=>{
                    toast.error("Failed to fetch products")
                    setLoading(false)
                })
            }

        },
        [loading]
    )

    return(
        <div className="w-full flex flex-wrap p-8  ">
            {
                loading?<LoadingAnimation/>
                :<>
                   {
                    product.map(
                        (product)=>{
                            return(
                               <ProductCard key={product.productId} product={product} />
                            )
                        }
                    )
                   }
                </>
            }
        </div>
    )
}