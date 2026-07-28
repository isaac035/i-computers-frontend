import PriceFormat from "../lib/priceFormat"
import { Link } from "react-router-dom"

export default function ProductCard(props) {

  const product = props.product;
  
  return (
    <Link to={"/overview/"+product.productId} className="bg-white w-[390px] h-[500px] m-6  shadow-2xl rounded-2xl hover:[&_.primary-image]:opacity-0 flex flex-col overflow-hidden ">
      <div className="w-full h-[350px] border-4 border-red-950 relative ">
        <img src={product.images[0]} className="w-full h-full absolute bg-white" />
        <img src={product.images[1]} className="w-full h-full absolute bg-white primary-image transition-opacity duration-700" />

      </div>
      <span className="font-thin text-sm text-gray-400 mt-3 px-4 ">{product.productId}</span>
      <h1 className="text-2xl font-semibold text-secondary mt-2 px-4">{product.name}</h1>
      {
         product.labeledPrice > product.price && <span className="text-red-600 text-lg font-semibold mt-2 px-4 line-through">{PriceFormat(product.labeledPrice)} </span>
      }
      {
        <span className="text-accent text-2xl font-semibold mt-2 px-4 mb-3">{PriceFormat(product.price)} </span>
      }
    </Link>
  )
}
