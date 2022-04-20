
// increment action ----------------------------
export const incNumber=(num)=>{
    return{
        type:"Increment",
        payload:num
    }
}


export const decNumber=()=>{
    return{
        type:"Decrement"
    }
}





// decrement action --------------------------------

export const timeChanger=()=>{
    return{
        type:"Timer"
    }
}