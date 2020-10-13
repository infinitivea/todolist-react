import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class extends Component {
  state = {
    inputValue: "",
    todoList: [
      {
        id: 1,
        task: "Do Homework",
      },
      {
        id: 2,
        task: "Swimming",
      },
      {
        id: 3,
        task: "Shopping",
      },
      {
        id: 4,
        task: "Running",
      },
    ],
  };

  createNewTask = () => {
    const newTask = this.state.inputValue;
    const newTodoList = [...this.state.todoList];
    console.log(this.state.todoList);
    newTodoList.push({ id: Math.round(Math.random() * 1000), task: newTask });
    this.setState({ todoList: newTodoList, inputValue: "" });
  };

  editTodoList = (targetId, newTask) => {
    const newTodoList = [...this.state.todoList];
    const targetIdx = newTodoList.findIndex((e) => e.id === targetId);
    newTodoList[targetIdx].task = newTask;
    this.setState({ todoList: newTodoList });
  };

  // deleteTodoList = (id) => {
  //   const newTodoList = [...this.state.todoList];
  //   const targetTodoIdx = newTodoList.findIndex(e => e.id === id);
  //   newTodoList.splice();
  //   this.setState({ todoList: newTodoList });
  // };

  deleteTodoList = (targetId) => {
    const newTodoList = this.state.todoList.filter((e) => e.id !== targetId);
    this.setState({ todoList: newTodoList });
  };

  render() {
    const { todoList, inputValue } = this.state;

    return (
      <div>
        <div style={{ display: "flex", width: "80%", margin: "5px auto" }}>
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <button
            className="btn btn-outline-primary"
            style={{ width: "200px", marginLeft: "10px" }}
            type="button"
            onClick={this.createNewTask}
          >
            Add Todo
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px auto",
          }}
        >
          <ul style={{ width: "80%", margin: "5px auto", textAlign: "center" }}>
            {todoList.map((todo) => (
              <TodoItem
                todo={todo}
                editFn={this.editTodoList}
                deleteTask={this.deleteTodoList}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
