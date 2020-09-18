import {ADD_TODO,DELETE_TODO,CLEAR_TODO} from '../types';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
const todos = (state =[] , action)=>{
    let todos=[];
    state=read_cookie('todos')
    if(action.type === ADD_TODO){
         todos=[...state, {text:action.text, date: action.date,id:Math.random()}]
         bake_cookie('todos',todos)
         console.log("reducer state", todos);
         return todos
    }
    else if(action.type === DELETE_TODO){
        todos = state.filter(todo => todo.id !== action.id)
        bake_cookie('todos',todos)
        return todos
    }
    else if(action.type === CLEAR_TODO){
        todos = []
        bake_cookie('todos',todos)
        return todos
    }
    
    
    else{
        return state
    }


}
export default todos