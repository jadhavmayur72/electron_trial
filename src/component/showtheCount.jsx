
import { useSelector,useDispatch } from "react-redux";
import { incNumber } from "../redux/action";


export const ShowtheCount=()=>{
    const showState=useSelector((state)=>state.changeNumber)
    const dispatcher= useDispatch(5)


    return(
        <>
        <h3>{showState}</h3>
        <button  onClick={()=>dispatcher(incNumber(5))}>Plus</button>
        </>
    )
}