import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './todo.css';


class Todos extends Component {

  // color='blue';
  constructor(props) {
    super(props);
    // this.toggleState = this.toggleState.bind(this);
    
    this.state = {
      color: "show"
    }
  }



  toggleState(){
    console.log("State Toggled"+ this.state.color);
    if(this.state.color === 'show'){
      this.setState({color: "hide"})
    }
    else{
      this.setState({color: "show"})
    }
  }

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return(
          <TodoItem  key={todo.title} todo={todo}/>
        );
      });
    }


    

    
    return (
      <div className="Todos">
        
          <h3>Todo List</h3>
          <button onClick={this.toggleState.bind(this)}>{this.state.color}</button>
          <div className={this.state.color}>
            {todoItems}
          </div>
          
         
      </div>
    );
  }
}
// Projects.propTypes = {
//   projects: React.PropTypes.string,
//   onDelete: React.PropTypes.func
// }

export default Todos;
