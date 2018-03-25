import React, { Component } from "react";
import TodoList from "./TodoList";
import Modal from "./Modal";
import initialItems from "../initialData";
import "./style.css";

class App extends Component {
  allItems = initialItems.slice();
  state = {
    items: this.allItems.slice(),
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({
      items: this.allItems.slice(),
      modalIsOpen: true
    });
  };

  addItem = (title, description) => {
    let id = this.allItems[this.allItems.length - 1].id + 1;
    let newTodo = {
      id: id,
      title: title,
      description: description,
      isDone: false
    };
    this.allItems.push(newTodo);
    this.setState({
      items: this.allItems.slice(),
      modalIsOpen: false
    });
  };

  deleteItem(item) {
    let idxItem = this.state.items.indexOf(item);
    this.state.items.splice(idxItem, 1);

    idxItem = this.allItems.indexOf(item);
    this.allItems.splice(idxItem, 1);

    this.setState({});
  }

  filterList(e) {
    e.preventDefault();
    //let textFilter = this.state.filter;
    let textFilter = this.refs.searchField.value;
    if (textFilter.length > 3) {
      let filteredList = this.allItems.filter(function(item) {
        return item.title.toLowerCase().search(textFilter.toLowerCase()) !== -1;
      });
      this.setState({ items: filteredList });
    } else {
      this.setState({ items: this.allItems.slice() });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <button className="btn right" onClick={this.openModal}>
          Add todo
        </button>

        <form
          action=""
          method="get"
          className="search"
          onSubmit={this.filterList.bind(this)}
        >
          <input
            type="search"
            ref="searchField"
            name=""
            placeholder="Search..."
            className="input"
          />
          <button type="submit" value="Submit" className="submit">
            <i className="fa fa-search" />
          </button>
        </form>

        <TodoList
          items={this.state.items.slice()}
          clickDelete={this.deleteItem.bind(this)}
        />

        <Modal
          isOpen={this.state.modalIsOpen}
          handleClickSave={this.addItem}
          handleClickCancel={() => this.setState({ modalIsOpen: false })}
        />
      </div>
    );
  }
}

export default App;
