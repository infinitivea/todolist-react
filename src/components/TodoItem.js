import React, { Component } from "react";

export default class TodoItem extends Component {
  state = {
    temp: "",
    isEdit: false,
  };

  editTodoItem = () => {
    const { todo, editFn } = this.props;
    const { temp } = this.state;

    editFn(todo.id, temp);
    this.setState({ isEdit: false });
  };

  clickEdit = () => {
    this.setState({ isEdit: true, temp: this.props.todo.task });
  };

  render() {
    const { todo, editFn, deleteTask } = this.props;
    const { temp, isEdit } = this.state;

    return (
      <div>
        <li key={todo.id} style={{ margin: "5px auto" }}>
          {isEdit ? (
            <input
              value={temp}
              onChange={(e) => this.setState({ temp: e.target.value })}
            />
          ) : null}
          {isEdit ? (
            <button
              onClick={this.editTodoItem}
              className="btn btn-success btn-sm"
              style={{ marginLeft: "5px" }}
            >
              Done
            </button>
          ) : null}
          {!isEdit ? todo.task : null}
          {!isEdit ? (
            <button
              onClick={this.clickEdit}
              className="btn btn-secondary btn-sm"
              style={{ marginLeft: "5px" }}
            >
              Edit
            </button>
          ) : null}
          <button
            onClick={() => deleteTask(todo.id)}
            className="btn btn-danger btn-sm"
            style={{ marginLeft: "5px" }}
          >
            {" "}
            Delete{" "}
          </button>
        </li>
        <hr />
      </div>
    );
  }
}
