import React, { Component } from 'react';
import Form from './Form/Form';
import Items from './Items/Items';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {id: 1, itemContent: 'Eat'},
      {id: 2, itemContent: 'Sleep'},
      {id: 3, itemContent: 'Code'},
      {id: 4, itemContent: 'Repeat'}
    ]
  }
 
  removeItemHandler = (id) =>{
    const items = this.state.todos.filter(item =>{
      return item.id !== id
    });
    this.setState({
      todos: items
    });
  }


  addItemHandler = (item) =>{
    let addThis = {id: this.state.todos.length + 1, itemContent: item};
    let todos = [...this.state.todos, addThis];
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <section className="item-card">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <h1 className="centered">Todo List</h1>
                    <Form addItem={this.addItemHandler} />
                    <Items todos={this.state.todos} removeItem={this.removeItemHandler} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
