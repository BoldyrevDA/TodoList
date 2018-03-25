import React, { PureComponent } from "react";
import "./style.css";

class TodoItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDone: props.item.isDone
    };
  }

  check = () => {
    this.props.item.isDone = !this.props.item.isDone;
    this.setState({
      isDone: !this.state.isDone
    });
  };

  render() {
    return [
      <td key="title">{this.props.item.title}</td>,
      <td key="descr">{this.props.item.description}</td>,
      <td key="done" className="td_center">
        <div className="checkbox">
          <input
            type="checkbox"
            id={this.props.item.id}
            onChange={this.check}
            checked={this.state.isDone ? "checked" : ""}
          />
          <label htmlFor={this.props.item.id} />
        </div>
      </td>,
      <td key="del" className="td_center">
        <i onClick={this.props.clickDelete} className="fa fa-trash" />
      </td>
    ];
  }
}

export default TodoItem;
