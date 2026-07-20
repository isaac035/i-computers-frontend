import { useState } from "react";
import toast from "react-hot-toast";

export default function TestPage(){

    const [status, setStatus] = useState("Off")


    return(
        <div className="w-full h-full flex items-center justify-center flex-col ">
            <h1 className="text-3xl font-bold"> {status}</h1>

            <div className="w-75 h-[50px] flex items-center justify-center">
                <button onClick={
                    ()=>{
                        setStatus("On")
                        toast.success("System is ON")
                    }
                } className="p-2 text-white m-2 bg-green-500">Turn On</button>

                <button onClick ={
                    ()=>{
                        setStatus("Off")
                    }
                }className="p-2 text-white m-2 bg-red-500">Turn Off</button>

                <button onClick ={
                    ()=>{
                        setStatus("Idle")
                    }
                }className="p-2 text-white m-2 bg-yellow-500">Turn Idle</button>

            </div>
        </div>
    )
} 