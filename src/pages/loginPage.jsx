import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useState } from "react";
import api from "../lib/api";   

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()


    function handleLogin(){

        api.post("/users/login",
            {
                email : email,
                password : password
            }
        )
        .then(
            (res)=>{
                
                toast.success("Login Success")

                localStorage.setItem("token",res.data.token)

                if(res.data.isAdmin){
                    navigate("/admin")

                }else{
                     navigate("/")
                }
                

            }
        ).catch(
            (err)=>{
                console.log(err)

                toast.error("Login Failed")
            }
        )
    } 

     return(
        <div className="w-full h-full bg-[url('background.jpg')] bg-cover bg-center flex  justify-center items-center ">

            <div className="w-[850px] h-[1000px]  backdrop-blur-2xl shadow-2xl rounded-3xl flex flex-col  items-center  p-6" >

             
             <img src="iLogo.png" className="w-[200px] h-[200px] object-cover " />
             <h1 className="text-6xl font-bold text-secondary mt-5 mb-5"> Login</h1>

             <label className="text-4xl w-full mt-5 ml-9.5 text-secondary font-semibold">Email</label>
             <input 
             value={email}
             onChange={
                (e)=>{
                    setEmail(e.target.value)
                }
             } 
             
             type="email" name="email" placeholder="user@gmail.com" className=" w-3xl h-16 mt-2 ml-7.5 mr-7.5 mb-4.5  px-4 py-3 text-lg border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />

             <label className="text-4xl w-full mt-5 ml-9.5 text-secondary font-semibold">Password</label>
             <input 
             value={password}
             onChange={
                (e)=>{
                    setPassword(e.target.value)
                }
             }
             
             
             type="password" name="password" placeholder="***********" className="w-3xl h-16 mt-2 ml-7.5 mr-7.5 mb-3.5 px-4 py-3 text-lg border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />


             <p className="w-full text-right mr-9.5"> Forget Password? Reset <Link to="/reset-Password" className="text-accent font-bold "> here </Link></p>

             <button onClick={handleLogin} className="w-3xl mt-4 py-3 mb-3.5 text-lg font-semibold text-white bg-accent rounded-md hover:bg-accent/75 hover:scale-[1.02] transition duration-200">Login</button>

             <p className="w-full text-right mr-9.5 mb-3.5"> Do not have an account? Register <Link to="/register" className="text-accent font-bold  "> here </Link></p>

             <button className="w-3xl py-3 text-lg font-semibold text- bg-secondary/15 border border-secondary rounded-md hover:bg-gray-100/10 hover:scale-[1.02] transition duration-200 flex items-center justify-center gap-2.5"><FcGoogle />Login with Google</button>





                 
            </div>
        </div>
     )
}