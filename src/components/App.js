import React, { Component } from 'react';
import {add_TODO, delete_TODO,clear_TODO} from '../actions/index';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from'../logo.png';

 class App extends Component {
    state={
        text:'',
        date: new Date(),
        a: true,
        b:false
    }
    render_todos=()=>{
        const {todos} = this.props;
       return(
           <ul className="list-group">
 {
     todos.map(todo=>{
            return(
                <li className="list-group-item" key={todo.id}>
                 <div>{todo.text}</div>
                 <div>{moment(new Date(todo.date)).fromNow()}</div>
                 <div className=" closeIcon" onClick={()=>this.props.delete_TODO(todo.id)}>X</div>
                </li>
            )

        })
        }
           </ul>
       )
    }
   
    render() {
     
        return (
            <div className="App" >
               <img src={Logo} alt="Logo"/>

               <div className="todo-title">
               <h2>What Should You Do ???</h2>
               </div>
               {this.render_todos()}
             
               <input   className="form-control"  type="text"  placeholder="What you want to do ...?"  value={this.state.text}
               onChange={(e)=>this.setState({text: e.target.value})}
               />
            
            {   /* React Datepicker is a pachkage to manage the date and time chosen*/}
              <DatePicker 
              placeholder={new Date()}
              className="form-control"
              value={this.state.date}
            selected={this.state.date}
            /*Select current time*/
            showTimeSelect
            /** */
            onChange={(date)=>{this.setState({date:date})}} 
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
/>
               <button className="btn btn-primary btn-block" onClick={ ()=>{
                   this.props.add_TODO(this.state.text,this.state.date)
                this.setState({text:'',date:''})
                }}
                   
                   >Add Todo</button>
               <button className="btn btn-danger btn-block clearTodo" onClick={()=>this.props.clear_TODO()}>Clear Todo's</button>


            </div>
        )
    }
}
/*

function mapDispatchToProps(dispatch){
    return{
        add_TODO:()=>dispatch(add_TODO())
    }
}*/

function mapstatelToProps(state){
    return{
        todos : state
    }

}
export default connect (mapstatelToProps,{add_TODO,delete_TODO,clear_TODO}) (App)