import {ADD_TODO, DELETE_TODO,CLEAR_TODO} from '../types';


export const add_TODO=(text,date)=>{
    const action ={
        type: ADD_TODO ,
        text, 
        date

    }
    console.log('add',action)
    return action
}


export const delete_TODO=(id)=>{
    const action ={
        type:DELETE_TODO,
        id:
        id
    }
    console.log("remove",action)
    return action
}


export const clear_TODO=()=>{
const action =  {
    type: CLEAR_TODO
}

return action
}