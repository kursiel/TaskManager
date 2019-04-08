import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Navigation from './components/Navigation'

import { todos } from './todos.json';


class App extends Component {

constructor(){
  super();
  this.state = {
    todos
  }
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
              {todo.description}
            </div>
            <div className="card-footer">
              {todo.priority}
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
          <div className="row mt-4">
            { todoss }
          </div>
        </div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
