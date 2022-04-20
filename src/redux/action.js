
// increment action ----------------------------
export const incNumber=(num)=>{
    return{
        type:"Increment",
        payload:num
    }
}


export const decNumber=(num2)=>{
    return{
        type:"Decrement",
        payload:num2
    }
}





// decrement action --------------------------------

export const timeChanger=()=>{
    return{
        type:"Timer"
    }
}