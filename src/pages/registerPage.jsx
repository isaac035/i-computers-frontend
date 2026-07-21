import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useState } from "react";
import api from "../lib/api";   

export default function RegisterPage(){

    const [email,setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()


    function handleRegister(){

        if(password !== confirmPassword){
            toast.error("Password do not match")
            return
        }


        api.post("/users/",
            {
                email : email,
                firstName: firstName,
                lastName:lastName,
                password : password
            }
        )
        .then(
            (res)=>{
                
                toast.success("Registration Success")

                navigate("/login")

            }
        ).catch(
            (err)=>{
                console.log(err)

                toast.error("Registration Failed")
            }
        )
    } 

     return(
        <div className="w-full h-full bg-[url('background.jpg')] bg-cover bg-center flex  justify-center items-center ">

            <div className="w-[850px]   backdrop-blur-2xl shadow-2xl rounded-3xl flex flex-col  items-center  p-6" >

             
             <img src="logo.svg" className="w-[200px] h-[200px] object-cover bg-accent/25" />


             <label className="text-4xl w-full mt-5 ml-9.5 text-secondary font-semibold">Email</label>
             <input 
             value={email}
             onChange={
                (e)=>{
                    setEmail(e.target.value)
                }
             } 
             
             type="email" name="email" placeholder="user@gmail.com" className=" w-3xl h-16 mt-2 ml-7.5 mr-7.5 mb-4.5  px-4 py-3 text-lg border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />




             <div className="w-full flex flex-row gap-2 ">
                
             <div className="w-1/2  flex flex-col">

             <label className="text-4xl w-full mt-5 ml-4.5 text-secondary font-semibold ">First Name</label>
             <input 
             value={firstName}
             onChange={
                (e)=>{
                    setFirstName(e.target.value)
                }
             } 
             
             type="text" name="firstName" placeholder="Jhon" className="  h-16 mt-2 ml-4.5 mr-7.5 mb-4.5  px-4 py-3 text-lg border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />



            </div>

            <div className="w-1/2 flex flex-col">

            <label className="text-4xl w-3xl mt-5 ml-9.5 text-secondary font-semibold">Last Name</label>
             <input 
             value={lastName}
             onChange={
                (e)=>{
                    setLastName(e.target.value)
                }
             } 
             
             type="text" name="lastName" placeholder="Dave" className=" h-16 mt-2 ml-7.5 mr-4.5 mb-4.5  px-4 py-3 text-lg border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                    
            </div>


            
             </div>



             <label className="text-4xl w-full mt-5 ml-9.5 text-secondary font-semibold">Password</label>
             <input 
            value={password}
             onChange={
                (e)=>{
                    setPassword(e.target.value)
                }
             }
             
             
             type="password" name="password" placeholder="***********" className="w-3xl h-16 mt-2 ml-7.5 mr-7.5 mb-3.5 px-4 py-3 text-lg border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />


             
             <label className="text-4xl w-full mt-5 ml-9.5 text-secondary font-semibold">Confirm Password</label>
             <input 
            value={confirmPassword}
             onChange={
                (e)=>{
                    setConfirmPassword(e.target.value)
                }
             }
             
             
             type="password" name="password" placeholder="***********" className="w-3xl h-16 mt-2 ml-7.5 mr-7.5 mb-3.5 px-4 py-3 text-lg border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />

            

             <button onClick={handleRegister} className="w-3xl mt-4 py-3 mb-3.5 text-lg font-semibold text-white bg-accent rounded-md hover:bg-accent/75 hover:scale-[1.02] transition duration-200">Register</button>

             <p className="w-full text-right mr-9.5 mb-3.5"> Allready have an account? Login <Link to="/login" className="text-accent font-bold  "> here </Link></p>

             <button className="w-3xl py-3 text-lg font-semibold text- bg-secondary/15 border border-secondary rounded-md hover:bg-gray-100/10 hover:scale-[1.02] transition duration-200 flex items-center justify-center gap-2.5"><FcGoogle />Register with Google</button>





                 
            </div>
        </div>
     )
}