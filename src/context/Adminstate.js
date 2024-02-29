import { useState } from "react"
import Admincontext from "./Admincontext"
const host="http://localhost:4000"

const AdminState= (props)=>{
    const [showmodal,setshowmodal]= useState(false)
    const [token, settoken]= useState(null)
    const [items, setitems] = useState([]);
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
        },
        "news":{
            inputs:{text:["Title"]},
            textarea:["Description"],
            button:["Submit"]
        }
    })
    
  const fetchthings = async (data) => {
    const res = await fetch(host +"/"+ data + "/all");
    const resdata = await res.json();
    setitems(resdata);
  };

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
        if(resdata.success){
            alert("Created Successfully")
            
            setitems([...items, resdata.new])
        }
        else{
            alert(JSON.stringify(resdata))
        }
        
    }
    const togglemodal=()=>{
        setshowmodal(!showmodal)
    }
    return(
        <Admincontext.Provider value={{showmodal, setshowmodal,variants,handleModalSubmit,fetchthings,items, setitems, togglemodal, token ,settoken}}>
            {props.children}
        </Admincontext.Provider>
    )
}
export default AdminState