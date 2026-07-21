import { createClient } from "@supabase/supabase-js";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bnN0bm9wb3RydnN3d3pmdGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MTg3MjMsImV4cCI6MjEwMDE5NDcyM30.SqRbPhbvX45Nsw4gNF2thXDPiNZFd4SX6A-BtRuQrbg"
const url = "https://wxnstnopotrvswwzftgp.supabase.co"

const supabase = createClient(url,key)



export default function uploadMedia(file){
    return new Promise(

        (resolve,reject)=>{
            if(file == null){
                reject("No file selected")
            }else{

                const timestamp = new Date.now().getTime();
                const fileName = timestamp+" "+file.name

                supabase.storage.from("images").upload(filename,file).then(
                    ()=>{
                        const publicUrl = supabase.storage.from("images").getPublicUrl(filename).data.publicUrl;

                        resolve(publicUrl)
                    }
                ).catch(
                    (err)=>{
                        reject(err)

                    }
                )
            }
        }
         
    )
}