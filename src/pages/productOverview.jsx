import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../lib/api"
import toast from "react-hot-toast" 
import LoadingAnimation from "../components/loadingAnimation";
import { useLocation } from "react-router-dom";
import ImageSlideShow from "../components/imageSlideShow";

export default function ProductOverview() {

    const params = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(location.state);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            if (loading) {
                api.get("/products/" + params.productId)
                    .then((res) => {
                        setProduct(res.data);
                        setLoading(false);
                    })
                    .catch((err) => {
                        toast.error("Failed to fetch product data");
                        setProduct(null); 
                        setLoading(false);
                    })
            }       
        },
        []
    )



    return(
        
        <div className="w-full h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] flex flex-col "> 
        {
            loading&&<LoadingAnimation/>
        }

        {
            product != null &&
            <div className="w-full h-full min-h-full flex ">

                <div className="w-1/2 h-full flex justify-center items-center ">
                 <ImageSlideShow images={product.images}/>

                </div>

                <div className="w-1/2 h-full ">

                </div>
               
            </div>  
        }
        {
            product == null && !loading &&
            <div className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-center ">
                <h1 className="text-4xl font-semibold text-secondary mt-5">Product not found</h1>
            </div>
        }
        </div>
    )
} 