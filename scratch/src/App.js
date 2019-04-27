import React from 'react';
import TodoData from "./TodoData"
import TodoItem from "./components/TodoItem"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodoData
    }
  }

  handleChange = (id) => {
    this.setState( prevState => {
      const updatedTodos = prevState.todos.map( todo => {
        if (id === todo.id) { todo.completed = !todo.completed }
        return todo;
      });
      return {
        todos: updatedTodos
      }
    });
  }  
  
  render() {
    const todoDisplay = this.state.todos.map(todo => <TodoItem item={todo} handleChange={this.handleChange} /> );
    return(
      <div>
        { todoDisplay }
      </div>
    );
  }
}

export default App;
