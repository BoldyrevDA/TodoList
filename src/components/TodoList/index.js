import React, { Component } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

class TodoList extends Component {
  render() {
    const itemsElements = this.props.items.map((item, index) => (
      <tr key={item.id} className={index % 2 !== 0 ? "odd_color" : ""}>
        <TodoItem
          item={item}
          clickDelete={this.props.clickDelete.bind(this, item)}
        />
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr className="table_header">
            <th>Title</th>
            <th>Description</th>
            <th>Is done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{itemsElements}</tbody>
      </table>
    );
  }
}

export default TodoList;
