import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Navigation from './components/Navigation'

import { todos } from './todos.json';
import TodoForm from './components/TodoForm'

class App extends Component {

constructor(){
  super();
  this.state = {
    todos
  }
  this.handleAddTodo = this.handleAddTodo.bind(this);
}

handleAddTodo(todo){
  this.setState({
    todos: [...this.state.todos, todo]
  })
}

handleRemoveTodo(){

}

  render() {

    const todoss = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill ml-2 badge-danger">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" type="submit" onClick={this.handleRemoveTodo}>Delete</button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
           Task
           <span className="badge badge-pill badge-light ml-2">
            {this.state.todos.length}
          </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-5">
            <div className="col-6 col-md-3 text-center">
              <img src={logo} className="App-logo smallImg center" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                {todoss}
              </div>  
            </div>    
          </div>
        </div>

      </div>
    );
  }
}

export default App;
