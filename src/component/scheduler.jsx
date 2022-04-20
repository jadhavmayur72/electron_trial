import { useEffect, useState } from "react"

export const Checking=()=>{
    // const [add,setAdd]=useState([])
    const [update, setUpdate]=useState("")
    const[statu,setStatu]=useState("")
    const[location,setLocation]=useState("")
    const[start,setStart]=useState("")
    const[end,setEnd]=useState("")
    const[preset,setPreset]=useState("")
    const [fps,setFps] =useState("")

    useEffect(()=>{
       
          
       
       
    })
   
    const handleSUbmit=()=>{
        const data={
            status:false,

            schedule:{statu:statu,
                location:location,
                start:start,
                end:end,
                preset:preset,
                fps:fps}
        }
        console.log(data.schedule)
     }

    return(
        <>
        <div>
            <input type="text" name="" id="" />
         
        <button onClick={()=>{
            setUpdate(  
               
           
           <table>
            <thead>
                   <tr>
                       <th>Status</th>
                       <th>Location</th>
                       <th>Start time</th>
                       <th>End time</th>
                       <th>preset</th>
                       <th>FPS</th>
                   </tr>
               </thead> 
          
            
               <tbody>
                   <tr>
                       <th>
                       <input type="checkbox" placeholder="New" value={statu}  onChange={(e)=>setStatu(e.target.value)}   />
                       </th>
                       <th>
                     <input type="text" name=""  placeholder="Location" onChange={(w)=>setLocation(w.target.value)} />
                       </th>

                       <th> <input type="date"  onChange={(e)=>setStart(`${e.target.value}`)} /></th>

                       <th><input type="date"   onChange={(e)=>setEnd(e.target.value)} /></th>

                       <th>  <select  id="preset" onChange={(e)=>setPreset(e.target.value)}>
                           <option value="Axis Day time" >Axis Day time</option>
                        <option value="Axis Night time">Axis Night time</option>
                           </select>
                        </th>
                        <th>
                        <select  id="fps"  onChange={(e)=>setFps(e.target.value)}>
                             <option value="25 FPS">25 FPS</option>
                             <option value="30fps">30fps</option>
                        </select>
                        </th>
                        <th><button  onClick={handleSUbmit} >Save</button></th>
                   </tr>
               </tbody>
             
           </table>
      
           
      
          
          
         
        
        )

        }}>ADD session</button>


        <div>
            {update}
        </div>
        </div>
        </>
    )
}