import { useState } from "react"
import Admincontext from "./Admincontext"
const host="http://localhost:4000"

const AdminState= (props)=>{
    const [showmodal,setshowmodal]= useState(false)
    const [token, settoken]= useState(null)
    const [variants, setvariants] = useState({
        "blogs": {
            inputs: { text: ["Title", "Slug", "Author"], file: "image" },
            textarea: ["Description"],
            button: ["Submit"]
        },
        "projects": {
            inputs: { text: ["Title", "Department", "github"], file: "image" },
            textarea: ["Description"],
            button: ["Submit"],

        },
        "events": {

            inputs: { text: ["Title", "Venue"], file: "image" },

            textarea: ["Description"],
            button: ["Submit"]
        }
    })
    const handleModalSubmit=async(data,requestType,variant,operation ,token)=>{
        if(!token){
            console.log("token not found")
            return;
        }
        console.log(data)
        const res= await fetch(`${host}/${variant}/${operation}`,{
            method:requestType,
            body: JSON.stringify(data),
            headers:{
                token:token,
                "content-type":"application/json"
            }
        })
        const resdata= await res.json()
        alert(resdata )
        
    }
    const togglemodal=()=>{
        setshowmodal(!showmodal)
    }
    return(
        <Admincontext.Provider value={{showmodal, setshowmodal,variants,handleModalSubmit, togglemodal, token ,settoken}}>
            {props.children}
        </Admincontext.Provider>
    )
}
export default AdminState