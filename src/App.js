import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
          <div class="container">
            <h1 class="display-4">Todo-List</h1>
          </div>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
