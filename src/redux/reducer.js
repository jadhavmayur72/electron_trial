
import { combineReducers } from "redux";


// adding action like adding and substarction of number at one place and =initializing;
const inititalState=0
export const changeNumber=(state=inititalState,action)=>{
    switch(action.type){
        case "Increment" :
        if(state>=9){
         alert("max limit reached")
         return;
        } else{
            return state + action.payload;
        };
        
      
        case "Decrement" : 
        if(state <=0){
            alert("min value cannot go beyond it");
            return;
        }
        else{
            return state-1;
        };
     
        default:return state
    }

} 


// const currentTime=new Date()



 

// storeing all tthe reducer at one place and exporting

export const rootReducer= combineReducers({
    changeNumber
})



