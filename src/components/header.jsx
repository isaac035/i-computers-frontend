import { Link } from "react-router-dom"

export default function  Header(){
   return(
   <header className="w-full h-[100px] bg-accent text-white flex items-center justify-between px-4 py-4">
    <Link to="/" className="h-full">
      <img src="/iLogo.png" className="h-full bg-white/50 rounded-4xl"/>
    </Link>

    <div className="h-full flex gap-4 items-center">
      <Link to="/" className="px-4 py-2 bg-white text-accent rounded-md hover:bg-white/80 transition duration-300">Home</Link>
      <Link to="/products" className="px-4 py-2 bg-white text-accent rounded-md hover:bg-white/80 transition duration-300">Products</Link>
      <Link to="/about-us" className="px-4 py-2 bg-white text-accent rounded-md hover:bg-white/80 transition duration-300">About Us</Link>
      
    </div>

     <div className="h-full w-[200px] flex gap-4 items-center">
      <Link to="/login" className="px-4 py-2 bg-white text-accent rounded-md hover:bg-white/80 transition duration-300">Login</Link>
      <Link to="/register" className="px-4 py-2 bg-white text-accent rounded-md hover:bg-white/80 transition duration-300">Register</Link>
    </div>

    </header>
   )
}